import { chatUsers } from '../../chatConfig';

export const initializeTestChannels = async (chatClient) => {
  if (!chatClient?.userID) {
    throw new Error('Chat client not connected');
  }

  try {
    // Create a unique channel ID for the group chat
    const groupChannelId = `group-chat-${Date.now()}`;
    
    // Create a group channel with all users
    const groupChannel = chatClient.channel('messaging', groupChannelId, {
      name: 'Group Chat',
      members: Object.values(chatUsers).map(user => user.id),
      image: 'https://getstream.io/random_svg/?name=group',
    });

    await groupChannel.watch();
    console.log('Group channel created:', groupChannelId);

    // Create direct message channels between admin and each user
    const adminId = chatUsers.admin.id;
    for (const [key, user] of Object.entries(chatUsers)) {
      if (key !== 'admin') {
        // Create a unique channel ID for each DM
        const dmChannelId = `dm-${adminId}-${user.id}-${Date.now()}`;
        
        const dmChannel = chatClient.channel('messaging', dmChannelId, {
          name: `DM with ${user.name}`,
          members: [adminId, user.id],
          image: user.image,
        });

        await dmChannel.watch();
        console.log('DM channel created:', dmChannelId);
      }
    }

    console.log('Test channels created successfully');
  } catch (error) {
    console.error('Error creating test channels:', error);
    throw error;
  }
};

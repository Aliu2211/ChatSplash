import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type Doctor = {
  id: string;
  name: string;
};

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    // Fetch the list of doctors (mock data for now)
    const fetchDoctors = async () => {
      const mockDoctors: Doctor[] = [
        { id: "1", name: "Dr. John Doe" },
        { id: "2", name: "Dr. Jane Smith" },
      ];
      setDoctors(mockDoctors);
    };

    fetchDoctors();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Doctors</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Doctor }) => (
          <View style={styles.doctorItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  doctorItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default DoctorList;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 16,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Archivo_400Regular",
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "48%",
  },
  submitButtonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList = [];
        querySnapshot.forEach((doc) => {
          userList.push({ id: doc.id, ...doc.data() });
        });
        // Sort by currentQuestionIndex descending
        userList.sort((a, b) => (b.currentQuestionIndex ?? 0) - (a.currentQuestionIndex ?? 0));
        setUsers(userList);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  // Helper to get last completed question key
  const getLastCompleted = (user) => {
    const timestamps = user.questionTimestamps || {};
    const keys = Object.keys(timestamps);
    if (keys.length === 0) return "-";
    // Sort keys by timestamp
    keys.sort((a, b) => new Date(timestamps[b]) - new Date(timestamps[a]));
    return keys[0];
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f6f7fb",
      padding: "24px 8px",
      fontFamily: "Merriweather, Arial, sans-serif"
    }}>
      <div style={{
        maxWidth: 1000,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
        padding: "32px 16px",
        marginBottom: 32
      }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24
        }}>
          <h2 style={{
            color: "#bb5c5c",
            fontWeight: 700,
            fontSize: "2rem",
            margin: 0,
            letterSpacing: "1px"
          }}>
            Treasure Hunt Dashboard
          </h2>
          <div style={{
            fontSize: "1.1rem",
            color: "#333",
            background: "#ffe0e0",
            borderRadius: 8,
            padding: "8px 18px",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(187,92,92,0.08)"
          }}>
            Total Users: {users.length}
          </div>
        </div>
        {loading ? (
          <div style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading...</div>
        ) : (
          <div style={{
            overflowX: "auto",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: 600,
              fontSize: "1rem"
            }}>
              <thead>
                <tr style={{
                  background: "linear-gradient(90deg, #bb5c5c 0%, #ffbfae 100%)",
                  color: "#fff"
                }}>
                  <th style={{ padding: "12px 8px", borderRadius: "12px 0 0 0" }}>Sl No</th>
                  <th style={{ padding: "12px 8px" }}>Name</th>
                  <th style={{ padding: "12px 8px" }}>Email</th>
                  <th style={{ padding: "12px 8px" }}>Current Index</th>
                  <th style={{ padding: "12px 8px" }}>Last Completed</th>
                  <th style={{ padding: "12px 8px", borderRadius: "0 12px 0 0" }}>Finished</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user.id} style={{
                    borderBottom: "1px solid #eee",
                    background: idx % 2 === 0 ? "#fff8f6" : "#fff"
                  }}>
                    <td style={{
                      padding: "10px 8px",
                      textAlign: "center",
                      fontWeight: 500,
                      color: "#bb5c5c"
                    }}>{idx + 1}</td>
                    <td style={{ padding: "10px 8px", color: "#222" }}>{user.name}</td>
                    <td style={{ padding: "10px 8px", color: "#222" }}>{user.email}</td>
                    <td style={{
                      padding: "10px 8px",
                      textAlign: "center",
                      color: "#333",
                      fontWeight: 500
                    }}>{user.currentQuestionIndex ?? 0}</td>
                    <td style={{
                      padding: "10px 8px",
                      textAlign: "center",
                      color: "#333"
                    }}>{getLastCompleted(user)}</td>
                    <td style={{
                      padding: "10px 8px",
                      textAlign: "center",
                      color: user.finished ? "#2ecc40" : "#bb5c5c",
                      fontWeight: 700
                    }}>{user.finished ? "✅" : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
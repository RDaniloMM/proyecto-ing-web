"use client";

import React from "react";

interface User {
  id: number;
  name: string;
  message: string;
  time: string;
}

const users: User[] = [
  { id: 1, name: "User 1", message: "Mensaje de prueba", time: "12:05 PM" },
  { id: 2, name: "User 2", message: "Mensaje de prueba", time: "1:00 AM" },
  { id: 3, name: "User 3", message: "Mensaje de prueba", time: "5:00 AM" },
  { id: 4, name: "User 4", message: "Mensaje de prueba", time: "8:00 AM" },
  { id: 5, name: "User 5", message: "Mensaje de prueba", time: "8:30 AM" },
  { id: 6, name: "User 6", message: "Mensaje de prueba", time: "10:00 AM" },
  { id: 7, name: "User 7", message: "Mensaje de prueba", time: "Ayer" },
  { id: 8, name: "User 8", message: "Mensaje de prueba", time: "Ayer" },
  { id: 9, name: "User 9", message: "Mensaje de prueba", time: "Ayer" },
  { id: 10, name: "User 10", message: "Mensaje de prueba", time: "Ayer" },
  { id: 11, name: "User 11", message: "Mensaje de prueba", time: "Ayer" },
  { id: 12, name: "User 12", message: "Mensaje de prueba", time: "Ayer" },
];

const UserList = () => {
    return (
      <div className="bg-BlackCalido rounded-lg shadow-lg p-4 h-full overflow-y-auto w-full max-w-xs border border-BorderColor">
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-GrayOscuro transition"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-GrayCalido rounded-full"></div>
                <div>
                  <h4 className="text-sm text-WhiteCalido">{user.name}</h4>
                  <p className="text-xs text-GrayPalido truncate">
                    {user.message}
                  </p>
                </div>
              </div>
              <span className="text-xs text-GrayPalido">{user.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default UserList;

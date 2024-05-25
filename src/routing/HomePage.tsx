import {
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import apiClient from "../services/apiClient";
import "../routing/HomePage.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import userService, { User } from "../services/user-service";
import { useTheme } from "../context/themeContext";

const headRowStyleLight = {
  color: "black",
  fontWeight: 600,
  borderBottom: "1px solid black",
};

const headRowStyleBlack = {
  color: "white",
  fontWeight: 600,
  borderBottom: "1px solid white",
};

const fieldTextNameLight = {
  color: "black",
  fontWeight: 550,
  borderBottom: "1px solid black",
};

const fieldTextNameDark = {
  color: "white",
  fontWeight: 550,
  borderBottom: "1px solid white",
};

const fieldText = {
  fontWeight: 400,
  borderBottom: "1px solid black",
};

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const lightTheme = theme.includes("light");
  console.log(lightTheme);

  const getUsers = () => {
    setLoading(true);
    userService
      .getAll<User>()
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })

      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (user: User) => {
    console.log(user);

    if (user.id) {
      userService
        .delete(user.id)
        .then((res) => {
          setUsers(users.filter((u) => u.id !== user.id));
          console.log(user);
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div>
          <CircularProgress color="secondary" />
        </div>
      )}

      <div className={lightTheme ? "black" : "white"}>
        <div>
          <h1 className={lightTheme ? "black" : "white"}>List of Users</h1>
        </div>
        <button
          className={lightTheme ? "buttonStyleLight" : "buttonStyleDark"}
          onClick={toggleTheme}
        >
          Thema
        </button>
        <div className="abb_button">
          {" "}
          <Link to="/create">
            <Button
              variant="contained"
              style={{
                marginRight: 32,
                borderRadius: 20,
                backgroundColor: "green",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Add +
            </Button>
          </Link>
        </div>
        <div className="userDataTable">
          <div className="tableOpp">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={lightTheme ? headRowStyleLight : headRowStyleBlack}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={lightTheme ? headRowStyleLight : headRowStyleBlack}
                    align="right"
                  >
                    User Name
                  </TableCell>
                  <TableCell
                    sx={lightTheme ? headRowStyleLight : headRowStyleBlack}
                    align="right"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={lightTheme ? headRowStyleLight : headRowStyleBlack}
                    align="right"
                  >
                    Phone
                  </TableCell>
                  <TableCell
                    sx={lightTheme ? headRowStyleLight : headRowStyleBlack}
                    align="center"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={lightTheme ? fieldTextNameLight : fieldTextNameDark}
                      scope="row"
                      align="center"
                    >
                      <div className="nameContainer">
                        <div className="title"></div>
                        {user.name}
                      </div>
                    </TableCell>
                    <TableCell
                      sx={lightTheme ? fieldTextNameLight : fieldTextNameDark}
                      align="right"
                    >
                      {user.username}
                    </TableCell>
                    <TableCell
                      sx={lightTheme ? fieldTextNameLight : fieldTextNameDark}
                      align="right"
                    >
                      {user.email}
                    </TableCell>
                    <TableCell
                      sx={lightTheme ? fieldTextNameLight : fieldTextNameDark}
                      align="right"
                    >
                      {user.phone}
                    </TableCell>
                    <TableCell
                      sx={lightTheme ? fieldTextNameLight : fieldTextNameDark}
                      align="right"
                    >
                      <Link to={"/update/" + user.id}>
                        <Button
                          variant="contained"
                          style={{
                            marginRight: 32,
                            borderRadius: 20,
                            backgroundColor: "green",
                            textTransform: "none",
                            fontWeight: 500,
                          }}
                        >
                          Update
                        </Button>
                      </Link>

                      <Button
                        variant="contained"
                        onClick={() => deleteUser(user)}
                        style={{
                          marginRight: 32,
                          borderRadius: 20,
                          backgroundColor: "red",
                          textTransform: "none",
                          fontWeight: 500,
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

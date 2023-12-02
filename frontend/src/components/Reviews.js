import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const Reviews = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      book: "",
      rating: "",
      review: "",
    });
  
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/review", {
          name: String(inputs.name),
          book: String(inputs.book),
          rating: String(inputs.rating),
          review: String(inputs.review),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/"));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <FormLabel>book</FormLabel>
          <TextField
            value={inputs.book}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="book"
          />
          <FormLabel>Review</FormLabel>
          <TextField
            value={inputs.review}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="review"
          />

          <FormLabel>rating</FormLabel>
          <TextField
            value={inputs.rating}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="rating"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Available"
          />
  
          <Button variant="contained" type="submit">
            Add Review
          </Button>
        </Box>
      </form>
    );
  };
  
  export default Reviews;
  
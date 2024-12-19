import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { ListSubheader } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

const UserForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [comments, setComments] = useState<string>("");
  const [dropdown, setDropdown] = useState<string>("");
  const [favoriteOtt, setFavoriteOtt] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>(
    []
  );
  const [skills, setSkills] = useState<string[]>([]);
  const [cgpa, setCgpa] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [jobRole, setJobRole] = useState<string>("");
  const [workLocations, setWorkLocations] = useState<string[]>([]);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };
  const handleWorkLocationChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setWorkLocations(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    {
      alert(`
            First Name: ${firstName};
            DOB: ${dob};
            Mobile Number: ${mobileNumber};
            Password: ${password};
            Email: ${email};
            Gender: ${gender};
            Checkbox: ${isChecked ? "Checked" : "Unchecked"};
            Comments: ${comments};
            Country: ${dropdown}
            Favorite OTT: ${favoriteOtt};
            Hobbies: ${hobbies.join(", ")};
            ProgrammingLanguages: ${programmingLanguages.join(", ")};
            Skills: ${skills.join(", ")}
            CGPA: ${cgpa}
            Age: ${age};
            Job Role: ${jobRole}
            Preferred Work Locations: ${workLocations.join(", ")}
            `);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <form onSubmit={handleSubmit}>
        {/* First Name Input */}
        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          sx={{ mb: 2 }}
        />
        {/* DOB Input */}
        <TextField
          fullWidth
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={(event) => {
            setDob(event.target.value);
          }}
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        {/* Mobile Number Input */}
        <TextField
          fullWidth
          label="Mobile Number"
          type="tel"
          value={mobileNumber}
          onChange={(event) => {
            setMobileNumber(Number(event.target.value));
          }}
          sx={{ mb: 2 }}
        />
        {/* Password Input */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          sx={{ mb: 2 }}
        />
        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          sx={{ mb: 2 }}
        />
        {/* Gender Input */}
        <FormControl sx={{ mb: 2, color: "blue" }}>
          <p style={{ color: "#616161" }}>Gender</p>
          <RadioGroup
            row
            value={gender}
            onChange={(event) => {
              setGender(event.target.value);
            }}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
        {/* Checkbox Input */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(event) => {
                setIsChecked(event.target.checked);
              }}
            />
          }
          label="I agree to the terms and conditions"
          sx={{ mb: 2, color: "blue" }}
        />
        {/* Comments Input */}
        <TextField
          fullWidth
          label="Comments"
          value={comments}
          onChange={(event) => {
            setComments(event.target.value);
          }}
          sx={{ mb: 2 }}
        />
        {/* Country Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Country</InputLabel>
          <Select
            value={dropdown}
            onChange={(event) => setDropdown(event.target.value)}
            label="Country"
          >
            <MenuItem value="">Select Country</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
          </Select>
        </FormControl>
        {/* Favorite OTT Options Autocomplete */}
        <Autocomplete
          disablePortal
          options={[
            "AHA",
            "Netflix",
            "Hotstar",
            "Prime",
            "Hulu",
            "Disney+",
            "Apple TV",
            "Zee5",
            "SonyLiv",
          ]}
          getOptionLabel={(option) => option}
          value={favoriteOtt}
          onChange={(_, newValue) => {
            setFavoriteOtt(newValue || "");
          }}
          renderInput={(params) => (
            <TextField {...params} label="Favorite OTT Options" />
          )}
          sx={{ mb: 2 }}
        />
        {/* Multiple Select for Hobbies */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Hobbies</InputLabel>
          <Select
            multiple
            value={hobbies}
            onChange={(event) => setHobbies(event.target.value as string[])}
            renderValue={(selected) => selected.join(", ")}
            label="Hobbies"
          >
            <MenuItem value="Reading">Reading</MenuItem>
            <MenuItem value="Traveling">Traveling</MenuItem>
            <MenuItem value="Gaming">Gaming</MenuItem>
            <MenuItem value="Cooking">Cooking</MenuItem>
          </Select>
        </FormControl>
        {/* List of programming languages */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Programming Languages</InputLabel>
          <Select
            multiple
            value={programmingLanguages}
            onChange={(event) =>
              setProgrammingLanguages(event.target.value as string[])
            }
            label="Programming Languages"
          >
            <MenuItem value="JavaScript">
              <Checkbox checked={programmingLanguages.includes("JavaScript")} />
              JavaScript
            </MenuItem>
            <MenuItem value="Python">
              <Checkbox checked={programmingLanguages.includes("Python")} />
              Python
            </MenuItem>
            <MenuItem value="Java">
              <Checkbox checked={programmingLanguages.includes("Java")} />
              Java
            </MenuItem>
            <MenuItem value="C++">
              <Checkbox checked={programmingLanguages.includes("C++")} />
              C++
            </MenuItem>
            <MenuItem value="Ruby">
              <Checkbox checked={programmingLanguages.includes("Ruby")} />
              Ruby
            </MenuItem>
            <MenuItem value="Go">
              <Checkbox checked={programmingLanguages.includes("Go")} />
              Go
            </MenuItem>
            <MenuItem value="Swift">
              <Checkbox checked={programmingLanguages.includes("Swift")} />
              Swift
            </MenuItem>
          </Select>
        </FormControl>
        {/* Skills with chip dorpdown */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Skills</InputLabel>
          <Select
            multiple
            value={skills}
            onChange={(event) => setSkills(event.target.value as string[])}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} sx={{ margin: 0.5 }} />
                ))}
              </Box>
            )}
            label="Skills"
          >
            {/* List of skills */}
            <MenuItem value="React">
              <Checkbox checked={skills.includes("React")} />
              React
            </MenuItem>
            <MenuItem value="Node.js">
              <Checkbox checked={skills.includes("Node.js")} />
              Node.js
            </MenuItem>
            <MenuItem value="CSS">
              <Checkbox checked={skills.includes("CSS")} />
              CSS
            </MenuItem>
            <MenuItem value="HTML">
              <Checkbox checked={skills.includes("HTML")} />
              HTML
            </MenuItem>
            <MenuItem value="TypeScript">
              <Checkbox checked={skills.includes("TypeScript")} />
              TypeScript
            </MenuItem>
            <MenuItem value="Python">
              <Checkbox checked={skills.includes("Python")} />
              Python
            </MenuItem>
          </Select>
        </FormControl>
        {/* CGPA WITH PLACEHOLDER DROPDOWN */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select
            value={cgpa}
            onChange={(event) => setCgpa(event.target.value)}
            displayEmpty
          >
            {/* Placeholder Option */}
            <MenuItem value="" disabled>
              Select CGPA
            </MenuItem>

            {/* List of CGPA options */}
            <MenuItem value="Fifty">50</MenuItem>
            <MenuItem value="Sixty">60</MenuItem>
            <MenuItem value="Eighty">80</MenuItem>
            <MenuItem value="Above Eighty">Above 80</MenuItem>
          </Select>
        </FormControl>
        {/* age with a dialog */}
        <Box>
          <Button variant="outlined" onClick={handleDialogOpen}>
            Select Age
          </Button>
          <Dialog open={open} onClose={handleDialogClose}>
            <DialogTitle>
              Select Your Age
              <IconButton
                aria-label="close"
                onClick={handleDialogClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              ></IconButton>
            </DialogTitle>
            <DialogContent>
              <FormControl fullWidth>
                <InputLabel>Age</InputLabel>
                <Select
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  label="Age"
                >
                  <MenuItem value="">Select Age</MenuItem>
                  <MenuItem value="18-25">18-25</MenuItem>
                  <MenuItem value="26-35">26-35</MenuItem>
                  <MenuItem value="36-45">36-45</MenuItem>
                  <MenuItem value="46+">46+</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        ;{/* Grouped Dropdown for Job Role */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Job Role</InputLabel>
          <Select
            value={jobRole}
            onChange={(event) => setJobRole(event.target.value)}
            label="Job Role"
          >
            <MenuItem value="" disabled>
              Select Job Role
            </MenuItem>
            <ListSubheader>Technology</ListSubheader>
            <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
            <MenuItem value="Backend Developer">Backend Developer</MenuItem>
            <MenuItem value="Full-Stack Developer">
              Full-Stack Developer
            </MenuItem>
            <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
            <ListSubheader>Management</ListSubheader>
            <MenuItem value="Project Manager">Project Manager</MenuItem>
            <MenuItem value="Product Manager">Product Manager</MenuItem>
            <MenuItem value="Team Lead">Team Lead</MenuItem>
            <ListSubheader>Other</ListSubheader>
            <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
            <MenuItem value="Data Analyst">Data Analyst</MenuItem>
            <MenuItem value="Quality Assurance">Quality Assurance</MenuItem>
          </Select>
        </FormControl>

         {/* Native multiple select for Preferred Work Location */}
         <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel shrink htmlFor="select-multiple-native"sx={{ mb: 1 }}>
            Preferred Work Location
          </InputLabel>
          <Select<string[]>
            multiple
            native
            value={workLocations}
            onChange={handleWorkLocationChange}
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {[
              "New York",
              "San Francisco",
              "Los Angeles",
              "Seattle",
              "Austin",
              "Chicago",
              "Boston",
              "Denver",
              "Atlanta",
              "Miami",
            ].map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Select>
        </FormControl>

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};
export default UserForm;

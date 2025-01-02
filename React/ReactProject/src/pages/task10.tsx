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
import { Chip, FormHelperText } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { ListSubheader } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

const UserForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [errorFirstName, setFirstNameError] = useState<string>("");

  const [dob, setDob] = useState<string>("");
  const [errorDob, setDobError] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [errorMobileNumber, setMobileNumberError] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [errorPassword, setPasswordError] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [errorEmail, setEmailError] = useState<string>("");

  const [gender, setGender] = useState<string>("");
  const [errorGender, setGenderError] = useState<string>("");

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errorCheckbox, setErrorCheckbox] = useState<string>("");

  const [comments, setComments] = useState<string>("");
  const [errorComments, setErrorComments] = useState<string>("");

  const [dropdown, setDropdown] = useState<string>("");
  const [errorDropdown, setErrorDropdown] = useState<string>("");

  const [favoriteOtt, setFavoriteOtt] = useState<string>("");
  const [errorFavoriteOtt, setErrorFavoriteOtt] = useState<string>("");

  const [hobbies, setHobbies] = useState<string[]>([]);
  const [errorHobbies, setErrorHobbies] = useState<string>("");

  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>(
    []
  );
  const [errorProgrammingLanguages, setErrorProgrammingLanguages] =
    useState<string>("");

  const [skills, setSkills] = useState<string[]>([]);
  const [errorSkills, setErrorSkills] = useState<string>("");

  const [cgpa, setCgpa] = useState<string>("");
  const [errorCgpa, setErrorCgpa] = useState<string>("");

  const [age, setAge] = useState<string>("");
  const [errorAge, setErrorAge] = useState<string>("");

  const [open, setOpen] = useState(false);

  const [jobRole, setJobRole] = useState<string>("");
  const [errorJobRole, setErrorJobRole] = useState<string>("");

  const [workLocations, setWorkLocations] = useState<string[]>([]);
  const [errorWorkLocations, setErrorWorkLocations] = useState<string>("");

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

  // Validation for First Name
  const validateFirstName = (value: string) => {
    if (value === "") {
      setFirstNameError("First Name is required.");
      return false;
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      setFirstNameError("First Name can only contain letters and spaces.");
      return false;
    } else {
      setFirstNameError("");
      return true;
    }
  };

  // Validation for DOB
  const validateDob = (value: string) => {
    if (value === "") {
      setDobError("Date of Birth is required.");
      return false;
    } else {
      setDobError("");
      return true;
    }
  };

  const validateMobileNumber = (value: string) => {
    if (value === "") {
      setMobileNumberError("Mobile Number is required.");
      return false;
    } else if (!/^\d{10}$/.test(value)) {
      setMobileNumberError("Mobile Number should be 10 digits.");
      return false;
    } else {
      setMobileNumberError("");
      return true;
    }
  };

  const validatePassword = (value: string) => {
    if (value === "") {
      setPasswordError("Password is required.");
      return false;
    } else if (value.length < 6) {
      setPasswordError("Password should be at least 6 characters.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const validateEmail = (value: string) => {
    if (value === "") {
      setEmailError("Email is required.");
      return false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
      setEmailError("Invalid email address.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validateGender = (value: string) => {
    if (value === "") {
      setGenderError("Gender is required.");
      return false;
    } else {
      setGenderError("");
      return true;
    }
  };

  const validateComments = (value: string) => {
    if (value === "") {
      setErrorComments("Comments cannot be empty.");
      return false;
    } else {
      setErrorComments("");
      return true;
    }
  };

  const validateCheckbox = (value: boolean) => {
    if (!value) {
      setErrorCheckbox("You must agree to the terms and conditions.");
      return false;
    } else {
      setErrorCheckbox("");
      return true;
    }
  };

  const validateDropdown = (value: string) => {
    if (value === "") {
      setErrorDropdown("Country selection is required.");
      return false;
    } else {
      setErrorDropdown("");
      return true;
    }
  };

  const validateFavoriteOtt = (value: string) => {
    if (value === "") {
      setErrorFavoriteOtt("Favorite OTT selection is required.");
      return false;
    } else {
      setErrorFavoriteOtt("");
      return true;
    }
  };

  const validateHobbies = (value: string[]) => {
    if (value.length === 0) {
      setErrorHobbies("At least one hobby is required.");
      return false;
    }
    setErrorHobbies("");
    return true;
  };

  const validateProgrammingLanguages = (value: string[]) => {
    if (value.length === 0) {
      setErrorProgrammingLanguages(
        "At least one programming language is required."
      );
      return false;
    }
    setErrorProgrammingLanguages("");
    return true;
  };

  const validateSkills = (value: string[]) => {
    if (value.length === 0) {
      setErrorSkills("At least one skill is required.");
      return false;
    }
    setErrorSkills("");
    return true;
  };

  const validateCgpa = (value: string) => {
    if (value === "") {
      setErrorCgpa("CGPA selection is required.");
      return false;
    }
    setErrorCgpa("");
    return true;
  };

  const validateAge = (value: string) => {
    if (value === "") {
      setErrorAge("Age selection is required.");
      return false;
    }
    setErrorAge("");
    return true;
  };

  const validateJobRole = (value: string) => {
    if (value === "") {
      setErrorJobRole("Job role selection is required.");
      return false;
    }
    setErrorJobRole("");
    return true;
  };

  const validateWorkLocations = (value: string[]) => {
    if (value.length === 0) {
      setErrorWorkLocations("At least one work location is required.");
      return false;
    }
    setErrorWorkLocations("");
    return true;
  };

  // Form-wide validation
  const validateForm = () => {
    const isFirstNameValid = validateFirstName(firstName);
    const isDobValid = validateDob(dob);
    const isMobileValid = validateMobileNumber(mobileNumber);
    const isPasswordValid = validatePassword(password);
    const isEmailValid = validateEmail(email);
    const isGenderValid = validateGender(gender);
    const isCommentsValid = validateComments(comments);
    const isCheckboxValid = validateCheckbox(isChecked);
    const isDropdownValid = validateDropdown(dropdown);
    const isFavoriteOttValid = validateFavoriteOtt(favoriteOtt);
    const isHobbiesValid = validateHobbies(hobbies);
    const isProgrammingLanguagesValid =
      validateProgrammingLanguages(programmingLanguages);
    const isSkillsValid = validateSkills(skills);
    const isCgpaValid = validateCgpa(cgpa);
    const isAgeValid = validateAge(age);
    const isJobRoleValid = validateJobRole(jobRole);
    const isWorkLocationsValid = validateWorkLocations(workLocations);

    return (
      isFirstNameValid &&
      isDobValid &&
      isMobileValid &&
      isPasswordValid &&
      isEmailValid &&
      isGenderValid &&
      isCommentsValid &&
      isCheckboxValid &&
      isDropdownValid &&
      isFavoriteOttValid &&
      isHobbiesValid &&
      isProgrammingLanguagesValid &&
      isSkillsValid &&
      isCgpaValid &&
      isAgeValid &&
      isJobRoleValid &&
      isWorkLocationsValid
    );
  };

  // Submit Handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    alert(`
      First Name: ${firstName}
      DOB: ${dob}
      Mobile Number: ${mobileNumber};
      Password: ${password}
      Email: ${email}
      Gender: ${gender}
      Checkbox: ${isChecked ? "Checked" : "Unchecked"}
      Comments: ${comments}
      Country: ${dropdown}
      Favorite OTT: ${favoriteOtt}
       Hobbies: ${hobbies.join(", ")}
        Programming Languages: ${programmingLanguages.join(", ")}
        Skills: ${skills.join(", ")}
        CGPA: ${cgpa}
        Age: ${age}
        Job Role: ${jobRole}
        Preferred Work Locations: ${workLocations.join(", ")}
    `);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <h1>Fill This Form</h1>
      <form onSubmit={handleSubmit}>
        {/* First Name Input */}
        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
            validateFirstName(event.target.value);
          }}
          error={!!errorFirstName}
          helperText={errorFirstName}
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
            validateDob(event.target.value);
          }}
          error={!!errorDob}
          helperText={errorDob}
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
            setMobileNumber(event.target.value);
            validateMobileNumber(event.target.value);
          }}
          error={!!errorMobileNumber}
          helperText={errorMobileNumber}
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
            validatePassword(event.target.value);
          }}
          error={!!errorPassword}
          helperText={errorPassword}
          sx={{ mb: 2 }}
        />

        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            validateEmail(event.target.value);
          }}
          error={!!errorEmail}
          helperText={errorEmail}
          sx={{ mb: 2 }}
        />

        {/* Gender Input */}
        <FormControl sx={{ display: "block", mb: 2 }}>
          <p style={{ color: "#616161" }}>Gender</p>
          <RadioGroup
            row
            value={gender}
            onChange={(event) => {
              setGender(event.target.value);
              validateGender(event.target.value);
            }}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
          {errorGender && (
            <p style={{ color: "red", fontSize: "0.875rem" }}>{errorGender}</p>
          )}
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(event) => {
                setIsChecked(event.target.checked);
                validateCheckbox(event.target.checked);
              }}
            />
          }
          label="I agree to the terms and conditions"
          sx={{ mb: 2, color: "blue" }}
        />
        {errorCheckbox && <p style={{ color: "red" }}>{errorCheckbox}</p>}

        {/* Comments Input */}
        <TextField
          fullWidth
          label="Comments"
          value={comments}
          onChange={(event) => {
            setComments(event.target.value);
            validateComments(event.target.value);
          }}
          error={!!errorComments}
          helperText={errorComments}
          sx={{ mb: 2 }}
        />

        {/* Country Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Country</InputLabel>
          <Select
            value={dropdown}
            onChange={(event) => {
              setDropdown(event.target.value);
              validateDropdown(event.target.value);
            }}
            error={!!errorDropdown}
            label="Country"
          >
            <MenuItem value="">Select Country</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
          </Select>
          {errorDropdown && <p style={{ color: "red" }}>{errorDropdown}</p>}
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
            validateFavoriteOtt(newValue || "");
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Favorite OTT Options"
              error={!!errorFavoriteOtt}
              helperText={errorFavoriteOtt}
            />
          )}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }} error={!!errorHobbies}>
          <InputLabel>Hobbies</InputLabel>
          <Select
            multiple
            value={hobbies}
            onChange={(event) => {
              setHobbies(event.target.value as string[]);
              setErrorHobbies(""); // Clear error on change
            }}
            renderValue={(selected) => selected.join(", ")}
            label="Hobbies"
          >
            <MenuItem value="Reading">Reading</MenuItem>
            <MenuItem value="Traveling">Traveling</MenuItem>
            <MenuItem value="Gaming">Gaming</MenuItem>
            <MenuItem value="Cooking">Cooking</MenuItem>
          </Select>
          <FormHelperText>{errorHobbies}</FormHelperText>
        </FormControl>

        {/* Programming Languages Dropdown */}
        <FormControl
          fullWidth
          sx={{ mb: 2 }}
          error={!!errorProgrammingLanguages}
        >
          <InputLabel>Programming Languages</InputLabel>
          <Select
            multiple
            value={programmingLanguages}
            onChange={(event) => {
              setProgrammingLanguages(event.target.value as string[]);
              setErrorProgrammingLanguages(""); // Clear error on change
            }}
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
          <FormHelperText>{errorProgrammingLanguages}</FormHelperText>
        </FormControl>

        {/* Skills Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }} error={!!errorSkills}>
          <InputLabel>Skills</InputLabel>
          <Select
            multiple
            value={skills}
            onChange={(event) => {
              setSkills(event.target.value as string[]);
              setErrorSkills(""); // Clear error on change
            }}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} sx={{ margin: 0.5 }} />
                ))}
              </Box>
            )}
            label="Skills"
          >
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
          <FormHelperText>{errorSkills}</FormHelperText>
        </FormControl>

        {/* CGPA Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }} error={!!errorCgpa}>
          <Select
            value={cgpa}
            onChange={(event) => setCgpa(event.target.value)}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select CGPA
            </MenuItem>
            <MenuItem value="Fifty">50</MenuItem>
            <MenuItem value="Sixty">60</MenuItem>
            <MenuItem value="Eighty">80</MenuItem>
            <MenuItem value="Above Eighty">Above 80</MenuItem>
          </Select>
          <FormHelperText>{errorCgpa}</FormHelperText>
        </FormControl>

        {/* Age with Dialog */}
        <Box>
          <Button variant="outlined" onClick={handleDialogOpen} sx={{ mb: 2 }}>
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
              />
            </DialogTitle>
            <DialogContent>
              <FormControl fullWidth error={!!errorAge}>
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
                <FormHelperText>{errorAge}</FormHelperText>
              </FormControl>
            </DialogContent>
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
              />
            </DialogTitle>
            <DialogContent>
              <FormControl fullWidth error={!!errorAge}>
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
                <FormHelperText>{errorAge}</FormHelperText>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* Job Role Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }} error={!!errorJobRole}>
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
          <FormHelperText>{errorJobRole}</FormHelperText>
        </FormControl>

        {/* Work Locations Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }} error={!!errorWorkLocations}>
          <InputLabel shrink htmlFor="select-multiple-native">
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
          <FormHelperText>{errorWorkLocations}</FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;

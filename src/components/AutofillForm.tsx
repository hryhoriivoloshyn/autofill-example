import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AutofillForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField autoComplete="email" />
      <TextField type="password" autoComplete="current-password" />
    </Box>
  );
}

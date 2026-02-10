import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#242058",
        },
        secondary: {
            main: "#2c284d",
        },
        success: {
            main: "#457547",
        },
        error: {
            main: "#be564e",
        },
        background: {
            default: "#3a3d3d",
        }
    },
    typography: {
        fontFamily: [
            'Open Sans',
        ].join(','),
        h2: {
            fontFamily: 'Open Sans',
            fontWeight: 600,
        },
        button: {
            fontFamily: 'Open Sans',
            italic: true,
        }
    }
});
import React, { useContext } from 'react';
import { ToastContext } from './context/ToastContext';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { saveFormSubmission } from './service/mockServer';

export default function PositionedSnackbar() {
    const { open, vertical, horizontal, setOpen, formInfo, setFormInfo } = useContext(ToastContext);

    const handleClose = () => {
        setOpen(false);
    };

    const handleLikeClick = async () => {
        try {
            const updatedFormInfo = { ...formInfo, liked: true };
            await saveFormSubmission(updatedFormInfo);
            setFormInfo(updatedFormInfo);
        } catch (error) {
            alert(`${error.message} — Please Click the LIKE button again or exit.`);
        }
    };

    return (
        <Box>
            {open &&
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    key={vertical + horizontal}
                >
                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', backgroundColor: '#000', width: '400px',
                        padding: '10px 20px', color: 'white', borderRadius: '4px'
                    }}>
                        <Box>
                            <Typography sx={{ letterSpacing: '1px' }}> {formInfo.firstName} {formInfo.lastName} </Typography>
                            <Typography sx={{ letterSpacing: '1px' }}> {formInfo.email} </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button sx={{ color: '#00FFFF', fontSize: '16px', m: '10px' }} onClick={handleLikeClick}> LIKE </Button>
                            <Typography variant="subtitle1">
                                <IconButton
                                    size="large"
                                    aria-label="close"
                                    color="inherit"
                                    onClick={handleClose}
                                >
                                    <CloseIcon fontSize="medium" />
                                </IconButton>
                            </Typography>

                        </Box>

                    </Box>


                </Snackbar>

            }

        </Box >
    );
}

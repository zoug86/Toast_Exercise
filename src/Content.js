import React, { useContext } from 'react';
import { ToastContext } from './context/ToastContext';

import Toast from './Toast';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function Content() {

  const { likedForms } = useContext(ToastContext);

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      {likedForms.length > 0 ? (
        <List sx={{ width: '100%', maxWidth: 600, bgcolor: '#f6f6f6', m: '20px 0' }}>
          {likedForms.map((form, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={`${form.firstName[0]}`} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={`${form.firstName} ${form.lastName}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {form.email}
                      </Typography>
                      {` — This is a cool challenge! Material UI rocks…`}
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index !== likedForms.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}

        </List>
      ) : (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" color="text.secondary">Liked Forms List Empty</Typography>
        </Box>
      )}
      <Toast />
    </Box>
  );
}

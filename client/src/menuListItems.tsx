import React from 'react';
import {
    createStyles,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import {
	Clear as ClearIcon,
    Dashboard as DashboardIcon,
	DateRange as DateRangeIcon,
	LocationOn as LocationOnIcon,
	RotateRight as RotateRightIcon,
	Search as SearchIcon,
	Timer as TimerIcon,
} from '@material-ui/icons';

export const menuListItems = (
    <div>
    <ListItem button>
        <ListItemIcon>
            <DashboardIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="DashboardIcon"/>
    </ListItem>
    <Divider/>
    <ListItem button>
        <ListItemIcon>
            <ClearIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="ClearIcon"/>
    </ListItem>
    <ListItem button>
        <ListItemIcon>
            <TimerIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="TimerIcon"/>
    </ListItem>
    <ListItem button>
        <ListItemIcon>
            <LocationOnIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="LocationOn"/>
    </ListItem>
    <ListItem button>
        <ListItemIcon>
            <SearchIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="SearchIcon"/>
    </ListItem>
    <ListItem button>
        <ListItemIcon>
            <RotateRightIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="RotateRightIcon"/>
    </ListItem>
    <ListItem button>
        <ListItemIcon>
            <DateRangeIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="DateRangeIcon"/>
    </ListItem>
    </div>
);
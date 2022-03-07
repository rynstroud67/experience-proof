import React, {useState, useEffect} from 'react';
import './style.css';
import {AppBar, Tabs, Tab, Typography, Box} from '@mui/core';

export default function CustomTabsComponent({labels, contents}) {
    const [value, setValue] = useState(0);

    useEffect(() => {

    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
                )}
            </div>
        );
    }

    const tabList = labels.map((label, index) => 
        <Tab label={label} {...a11yProps(index)} className="styled-tab" />
    )

    const tabPanelList = contents.map((content, index) =>
        <TabPanel value={value} index={index} className="tabPanel">
            {content}
        </TabPanel>
    )

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>
            <AppBar position="static">
                <Tabs className="styled-tabs" value={value} onChange={handleChange} aria-label="monthly-annually-tabs" centered >
                    {tabList}
                </Tabs>
            </AppBar>
            {tabPanelList}
        </>
    )
}
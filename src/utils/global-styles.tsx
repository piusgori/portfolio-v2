import { GlobalStyles as MuiGlobalStyles } from '@mui/material';
import { FONT_FAMILY, PRIMARY_MAIN } from '../config';

export default function GlobalStyles () {
    const inputGlobalStyles = (
        <MuiGlobalStyles
            styles={{
                '*': {
                    boxSizing: 'border-box',
                    padding: 0,
                    margin: 0,
                    fontFamily: FONT_FAMILY,
                    scrollBehavior: "smooth",
                },
                body: {
                    maxWidth: '100vw',
                    overflowX: 'hidden',
                },
                html: {
                    maxWidth: '100vw',
                    overflowX: 'hidden',
                    WebkitOverflowScrolling: 'touch',
                },
                "::-webkit-scrollbar": {
                    width: "4px",
                    height: '2px'
                  },
                  "::-webkit-scrollbar-track": {
                    boxShadow: "inset 0 0 2px grey",
                    borderRadius: "10px",
                  },
                  "::-webkit-scrollbar-thumb": {
                    borderRadius: "10px",
                    background: PRIMARY_MAIN
                  },
            }}
        />
    );
    return inputGlobalStyles;
}
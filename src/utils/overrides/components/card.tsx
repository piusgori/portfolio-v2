// ----------------------------------------------------------------------

export function card(_: any) {
    return {
        MuiCard: {
            styleOverrides: {
                root: ({ ownerState }: { ownerState: any }) => ({
                    ...(ownerState.variant !== 'outlined' && { boxShadow: '0px 2px 8px rgba(0,0,0,0.32)' }),
                })
            }
        },
    };
  }
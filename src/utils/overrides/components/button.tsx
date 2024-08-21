// ----------------------------------------------------------------------

export function button(_: any) {
  return {
    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: ({ ownerState }: { ownerState: any }) => ({
                textTransform: 'capitalize',
                borderRadius: '6px',
                ...(ownerState.variant === 'contained' && { color: 'white' })
            })
        }
    },
  };
}
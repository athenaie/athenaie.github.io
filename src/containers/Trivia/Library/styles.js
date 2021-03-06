const styles = theme => ({
    image: {
        position: "absolute",
        width: "calc(4.4 * 5 * 100vmax)",
        height: "calc(5 * 100vmax)",
        left: "-1180vmax",
        top: "-150vmax"
    },
    container: {
        height: "2000px",
    },
    cardbox: {
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "50vmax",
        height: "73vmax",
        maxHeight: "calc(100vh - 40px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    bookbox: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "inherit"
    },
    book: {
        width: "9vmax",
        height: "13.5vmax",
        padding: "8px"
    },
    card: {
        width: "90%",
        padding: "10px",
        maxHeight: "100%",
        fontFamily: theme.fonts.regular,
        display: "flex",
        flexDirection: "column",
    },
    heading: {
        fontFamily: theme.fonts.dainty,
        fontWeight: "bold",
        color: theme.palette.primary.main,
        textTransform: "capitalize"
    },
    content: {
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: "1"
    },
    home: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    button: {
        marginBottom: "0px",
        width: "100%",
        height: "48px"
    },
    icon: {
        color: theme.palette.primary.main,
    },
    library: {
        backgroundColor: "white !important",
        height: "20vmax",
        width: "78vmax",
    },
    "@media (max-width: 450px)": {
        content: {
            fontSize: "0.75em"
        },
        home: {
            height: "calc(100vh - 72px)"
        },
    },
    "@media (max-width: 800px)": {
        image: {
            top: "-90vmax"
        },
        cardbox: {
            width: "calc(100vw - 20px)",
            height: "67vmax",
            maxHeight: "calc(100vh - 40px)",
        },
        book: {
            width: "16vw",
            height: "24vw"
        },
        library: {
            width: "calc(154.5vw - 20px)",
            height: "40vw",
        }
    }
});

export default styles;
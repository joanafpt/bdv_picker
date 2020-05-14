export default {

    /*Views onde aparecem os resultados */
    output: {
        backgroundColor: 'beige',
        width: 300,
        height: 200, //era 100
        marginTop: 15,
        borderWidth: 5,
        // borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: 'black'

    },
    completeOutput: {
        backgroundColor: 'beige',
        width: 300,
        height: 400,
        marginTop: 20,
        borderTopRightRadius: 20,
        borderColor: 'black',
        borderWidth: 5,    /*FIM DE Views onde aparecem os resultados */
    },
   borderTransp: {
    justifyContent: 'center', 
    alignItems: 'center',
        backgroundColor: 'transparent', //exemplo
        width: 300,
        height: 400,
        marginTop: 20,
        borderTopRightRadius: 20,
        borderColor: 'transparent',
        borderWidth: 5,    /*FIM DE Views onde aparecem os resultados */
    },
    outputText: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14,
        lineHeight: 15,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5, 
        fontFamily:'openSans'
        },
    internalOutput: {
    
    
    },

    waitText: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        fontFamily: 'openSans'

    },
    completeListWaitText: {
        fontFamily: 'openSans',
        fontSize: 20,
       // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 170 //ver android

        
    },

    outputTextNoResponse: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%', /////////////////////////////////////////////////////
        alignSelf: 'center',
        marginLeft: 3,
        marginRight: 3
    },
};
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({

    container:{
        alignItems: 'center'
    },

    wrapper:{
        flexDirection: 'row',
        alignItems: 'center'
    }
,
    text:{
        color: '$white',
        fontSize: 18,
        paddingVertical: 20,
        fontWeight: '300'

    },

    icon:{
        width: 19,
        marginRight: 11
    }

});

export default styles;
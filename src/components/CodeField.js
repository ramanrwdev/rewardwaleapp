import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { normalizeHeight, normalizeWidth } from '../components/ResponsiveScreen';
import global from '../global';

const CodeField = (props, ref) => {
    const [otpArray, setOtpArray] = useState(['', '', '', '']);
    const firstTextInputRef = useRef(null);
    const secondTextInputRef = useRef(null);
    const thirdTextInputRef = useRef(null);
    const fourthTextInputRef = useRef(null);
    const fifthTextInputRef = useRef(null);
    const sixTextInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        clearOtp: () => clearOtpState()
    }));

    const clearOtpState = () => {
        firstTextInputRef.current.focus()
        setOtpArray(['', '', '', '']);
        props.otpData('');
    };
    const onOtpKeyPress = (index) => ({ nativeEvent: { key: value } }) => {
        // console.log('index ', index)
        if (value === 'Backspace' && otpArray[index] === '') {
            if (index === 1) {
                firstTextInputRef.current.focus();
            } else if (index === 2) {
                secondTextInputRef.current.focus();
            } else if (index === 3) {
                thirdTextInputRef.current.focus();
            } else if (index === 4) {
                fourthTextInputRef.current.focus();
            } else if (index === 5) {
                fifthTextInputRef.current.focus();
            }

            if (index > 0) {
                const otpArrayCopy = otpArray.concat();
                otpArrayCopy[index - 1] = '';
                setOtpArray(otpArrayCopy);
            }
        }
    };
    let otp = '';

    const onOtpChange = (index) => (value) => {
        if (isNaN(Number(value))) {
            return;
        }
        const otpArrayCopy = otpArray.concat();
        otpArrayCopy[index] = value;
        setOtpArray(otpArrayCopy);
        if (otpArrayCopy.length > 0) {
            otpArrayCopy.map((item) => otp += item);
        }
        // console.log('otp ', otp)
        props.otpData(otp);
        if (index === 5 && value) {
            // let otp = '';
            // otpArrayCopy.map((item) => otp += item);
            // props.otpData(otp);
            Keyboard.dismiss();
        }
        if (value !== '') {
            if (index === 0) {
                secondTextInputRef.current.focus();
            } else if (index === 1) {
                thirdTextInputRef.current.focus();
            } else if (index === 2) {
                fourthTextInputRef.current.focus();
            } else if (index === 3) 
            {
                fifthTextInputRef.current.focus();
            } else if(index === 4)
            {
                sixTextInputRef.current.focus();   
            }

        }
    };

    const refCallback = (textInputRef) => (node) => {
        textInputRef.current = node;
    };

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {[firstTextInputRef,
                secondTextInputRef,
                thirdTextInputRef,
                fourthTextInputRef,
                fifthTextInputRef,
                sixTextInputRef].map((item, index) => (
                    <TextInput
                        key={index}
                        ref={refCallback(item)}
                        maxLength={1}
                        onFocus={() => {
                            if (!otpArray[0] && !otpArray[1] && !otpArray[2] && !otpArray[3] && !otpArray[4] && !otpArray[5]) {
                                firstTextInputRef.current.focus();
                            } else if (otpArray[0] && !otpArray[1] && !otpArray[2] && !otpArray[3] && !otpArray[4] && !otpArray[5]) {
                                secondTextInputRef.current.focus()
                            } else if (otpArray[0] && otpArray[1] && !otpArray[2] && !otpArray[3] && !otpArray[4] && !otpArray[5]) {
                                thirdTextInputRef.current.focus()
                            } else if (otpArray[0] && otpArray[1] && otpArray[2] && !otpArray[3] && !otpArray[4] && !otpArray[5]) {
                                fourthTextInputRef.current.focus()
                            } else if(otpArray[0] && otpArray[1] && otpArray[2] && otpArray[3] && !otpArray[4] && !otpArray[5])
                            {
                                fifthTextInputRef.current.focus() 
                            } else if(otpArray[0] && otpArray[1] && otpArray[2] && otpArray[3] && otpArray[4] && !otpArray[5])
                            {
                                sixTextInputRef.current.focus() 
                            }
                        }}
                        value={otpArray[index]}
                        onChangeText={onOtpChange(index)}
                        onKeyPress={onOtpKeyPress(index)}
                        keyboardType="numeric"
                        autoFocus={index === 0 ? true : undefined}
                        style={{
                            height: normalizeHeight(48),
                            width: normalizeWidth(38),
                            //borderRadius: 10,
                           // backgroundColor: '#151D29',
                            marginRight: index <= 4 ? normalizeWidth(10) : 0,
                            borderBottomWidth: 1.5,
                            textAlign: 'center',
                            borderColor: global.color.white,
                            fontSize: normalizeHeight(26),
                            lineHeight: normalizeHeight(31),
                            fontWeight: '700',
                            color: global.color.white,
                            paddingVertical: normalizeHeight(9),
                        }}
                    />
                ))}
        </View>
    );

};

export default forwardRef(CodeField);

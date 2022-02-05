import React, { useState } from 'react';
import { Checkbox, Icon } from 'react-native-elements';
import { Link } from 'react-router-native';
import { WebView as RNWebView } from 'react-native-webview';

type CheckboxComponentProps = {};

const CheckboxComponent: React.FunctionComponent <
    CheckboxComponentProps, >
    = () => {
        const [check1, setCheck1] = useState(false);
        const [check2, setCheck2] = useState(false);
        const [check3, setCheck3] = useState(false);
        const [check4, setCheck4] = useState(false);

        return ( <
            >
            <
            Checkbox center title = "Click Here"
            checked = { check1 }
            onPress = {
                () => setCheck1(!check1) }
            />{' '} <
            Checkbox center title = "Click Here"
            checkedIcon = "dot-circle-0"
            uncheckedIcon = "circle-0"
            checked = { check2 }
            onPress = {
                () => setCheck2(!check2) }
            />{' '} <
            Checkbox center title = { ` Click Here to ${check3 ? 'Remove' : 'ADD'} This Item` }
            iconRight iconType = "material"
            checkedIcon = "clear"
            uncheckedIcon = "add"
            checkedColor = "red"
            checked = { check3 }
            onPress = {
                () => setCheck3(!check3) }
            />{' '} <
            Checkbox center checkedIcon = { <
                Icon
                name = "radio-button-checked"
                type = "material"
                color = "green"
                size = { 25 }
                iconStyle = {
                    { marginRight: 10 } }
                />
            }
            uncheckedIcon = { <
                icon
                name = "radio-button-unchecked"
                type = "material"
                color = "grey"
                size = { 25 }
                iconStyle = {
                    { marginRight: 10 } }
                />
            }
            checked = { check4 }
            onPress = {
                () => setCheck4(!check4) }
            />{' '} <
            />
        );
    };

export default CheckboxComponent;
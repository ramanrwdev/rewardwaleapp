import React from 'react';
import { normalizeHeight, normalizeWidth } from '../components/ResponsiveScreen';
import Global from '../global';
// import { Slider, Icon } from 'react-native-elements';
import Slider from '@react-native-community/slider';

const index = (props) => {
    const { lineStyle, iconStyle } = props;
    return (
        <Slider
            {...props}
            style={[{
                width: '100%',
                height: normalizeHeight(20),
            }, lineStyle]}
            tapToSeek
            // thumbImage={require('../images/Done.png')}
            minimumTrackTintColor={Global.color.cyanblue}
            maximumTrackTintColor={Global.color.ebonyClay}
            thumbTintColor={Global.color.cyanblue}
        />
        // <Slider
        //     {...props}
        //     maximumTrackTintColor={Global.color.ebonyClay}
        //     minimumTrackTintColor={Global.color.cyanblue}
        //     color={Global.color.cyanblue}
        //     allowTouchTrack={true}
        //     trackStyle={[{
        //         height: normalizeHeight(9),
        //         width: '100%',
        //         color: Global.color.cyanblue,
        //         borderRadius: normalizeHeight(10)
        //     }, lineStyle]}
        //     thumbStyle={[{
        //         height: normalizeHeight(20),
        //         width: normalizeHeight(20),
        //         backgroundColor: Global.color.white,
        //         borderColor: Global.color.cyanblue,
        //         borderWidth: normalizeHeight(3)
        //     }, iconStyle]}
        // />
    )
}
export default index
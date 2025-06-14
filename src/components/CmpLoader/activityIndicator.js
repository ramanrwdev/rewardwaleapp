import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Animated, Text } from 'react-native';
import Indicator from './indicator';
import styles from './styles';
import Global from '../../global';
import { normalizeHeight } from '../ResponsiveScreen';

export default class UIActivityIndicator extends PureComponent {
    static defaultProps = {
        color: 'rgb(0, 0, 0)',
        count: 12,
        size: 40
    };

    static propTypes = {
        ...Indicator.propTypes,

        color: PropTypes.string,
        size: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.renderComponent = this.renderComponent.bind(this);
    }

    renderComponent({ index, count, progress }) {
        const { size, color: backgroundColor } = this.props;
        const angle = index * 360 / count;

        const layerStyle = {
            transform: [{
                rotate: `${angle}deg`
            }]
        };

        const inputRange = Array.
            from(new Array(count + 1), (item, index) => (
                index / count
            ));

        const outputRange = Array.
            from(new Array(count), (item, index) => (
                Math.max(1.0 - index * (1 / (count - 1)), 0)
            ));

        for (let j = 0; j < index; j++) {
            outputRange.unshift(outputRange.pop());
        }

        outputRange.unshift(...outputRange.slice(-1));

        const barStyle = {
            width: size / 10,
            height: size / 4,
            borderRadius: size / 20,
            backgroundColor,
            opacity: progress.
                interpolate({
                    inputRange,
                    outputRange
                })
        };

        return (
            <Animated.View style={[styles.layer,
                layerStyle]} {...{ key: index }}>
                <Animated.View style={barStyle} />
            </Animated.View>
        );
    }

    render() {
        const { style, size: width, size: height, ...props } = this.props;


        return (
            <View style={[styles.container,
                style]}>
                <Indicator
                    style={{
                        width,
                        height
                    }}
                    renderComponent={this.renderComponent}
                    {...props}
                />
                <Text style={[{
                    marginTop: normalizeHeight(5),
                    color: Global.color.white70,
                    fontSize: normalizeHeight(15),
                    lineHeight: normalizeHeight(18),
                    fontWeight: '500',
                    letterSpacing: 0.3,
                    fontFamily: Global.font.font_family_fb
                },
                props.textStyle]}>{props.text}</Text>
                <Text style={[{
                    marginTop: normalizeHeight(5),
                    color: Global.color.white70,
                    fontSize: normalizeHeight(13),
                    lineHeight: normalizeHeight(16),
                    fontWeight: '500',
                    letterSpacing: 0.3,
                    fontFamily: Global.font.font_family_fb,
                    textAlign: 'center'
                },
                props.subTextStyle]}>{props.subText}</Text>
            </View>
        );
    }

}

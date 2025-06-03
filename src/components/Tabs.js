import React, { useEffect, useState, useRef } from "react";
import { View, Text, Animated, Dimensions, FlatList, Pressable, findNodeHandle } from "react-native";
import { normalizeHeight, normalizeWidth } from "./ResponsiveScreen";
import global from "../global";

// value = { tabdata }
// onChangeItem = {(value) => {
//     setTabdata(value)
// }}
// items = { ["GOLD", "SILVER"]}

export const ToggleTab = (props) => {
    const { items, value, onChangeItem, width } = props;
    // const [active, setActive] = useState(act ?? value === items[1])
    let transformX = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (value == items[1]) {
            Animated.timing(transformX, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(transformX, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        }
    }, [value]);

    const rotationX = transformX.interpolate({
        inputRange: [0, 1],
        outputRange: [2, ((width - 8) / 2)]
    })

    return (
        <View style={{
            backgroundColor: global.color.Dark,
            // backgroundColor: 'red',
            borderRadius: 10,
            // paddingVertical:
            height: normalizeHeight(40),
        }}>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 2,
                    bottom: 2,

                    borderRadius: 10,
                    width: (width - 8) / 2,
                    transform: [
                        {
                            translateX: rotationX
                        }
                    ],
                    backgroundColor: global.color.crystalBlue,
                }}
            />
            <FlatList data={items} keyExtractor={({ _, index }) => index}
                horizontal
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingHorizontal: normalizeWidth(4),
                    // paddingVertical: normalizeHeight(4),
                }}
                renderItem={({ item }) => {
                    return (
                        <Pressable style={{
                            paddingHorizontal: normalizeWidth(55),
                            paddingVertical: normalizeHeight(7),
                            borderRadius: 10,
                        }}
                            onPress={() => {
                                onChangeItem(item)
                                // setActive(!(item === items[0]))
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontWeight: '600',
                                fontSize: normalizeHeight(16),
                                textAlign: 'center'
                            }}>{item}</Text>
                        </Pressable>
                    )
                }}

            />
        </View>
    )

}

// value = { tabdata }
// onChangeItem = {(value) => {
//     setTabdata(value)
// }}
// items = {
//     [{
//         title: "GOLD",
//         image: GOLD,
//     }, {
//         title: "SILVER",
//         image: SILVER,
//     }]}
const DITab = React.forwardRef(({ item, index, setTabIndex, value, onChangeItem }) => {
    return (
        <Pressable
            ref={item?.ref}
            onPress={() => {
                setTabIndex(index)
                onChangeItem({
                    title: item?.title
                })
            }}
            style={{
                paddingHorizontal: normalizeWidth(12),
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text style={{
                color: item?.title === value?.title ? global.color.crystalBlue : global.color.white,
                fontSize: normalizeHeight(14),
                lineHeight: normalizeHeight(14),
            }}>{item?.title}</Text>
        </Pressable>
    )
})

const Indicator = ({ measures, tabIndex }) => {
    return (
        <Animated.View style={[{
            position: 'absolute',
            bottom: 0,
            left: measures[tabIndex].x + 8,
            backgroundColor: global.color.crystalBlue,
            height: normalizeHeight(2),
            width: normalizeWidth(measures[tabIndex]?.width - 18),
        }]} />
    )
}

export const LargeDITab = ({ items, value, onChangeItem }) => {
    const ref = useRef(null)
    const [index, setIndex] = useState(0)
    useEffect(() => {
        ref.current.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5,
        })
    }, [tabIndex])
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <View style={{
            backgroundColor: global.color.navyblueColor,
            justifyContent: 'center',
            height: normalizeHeight(30),
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Pressable style={{
                    width: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    onPress={() => {
                        if (index <= 0) {
                            setIndex(0)
                            onChangeItem(items[index])
                            return
                        } else {
                            setIndex(index - 1)
                            onChangeItem(items[index])
                        }
                    }}
                >
                    {/* <Image name={WHITEBACKARROW} width={normalizeWidth(10)} height={normalizeHeight(10)} />
                 */}
                </Pressable>
                <View style={{
                    width: '80%',
                }}>
                    <FlatList
                        ref={ref}
                        initialScrollIndex={index}
                        data={items}
                        horizontal
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => index}
                        renderItem={({ item, index: fIndex }) => {
                            return (
                                <Pressable style={{
                                    width: normalizeWidth(130),
                                    justifyContent: 'center',
                                    height: '100%',
                                    alignItems: 'center',
                                    borderBottomColor: index === fIndex ? global.color.TextLightBlue : global.color.navyblueColor,
                                    paddingBottom: normalizeHeight(5),
                                    borderBottomWidth: normalizeHeight(2),
                                }}
                                    onPress={() => {
                                        onChangeItem(item)
                                        setIndex(fIndex)
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: index === fIndex ? global.color.TextLightBlue : global.color.white
                                        }}
                                    >{item?.title}</Text>
                                </Pressable>
                            )
                        }}
                    />
                </View>
                <Pressable style={{
                    width: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} onPress={() => {
                    if (index >= items?.length - 1) {
                        setIndex(items?.length - 1)
                        onChangeItem(items[index])
                        return
                    } else {
                        setIndex(index + 1)
                        onChangeItem(items[index])
                    }
                }}>
                    {/* <Image name={WHITEFRONTARROW} width={normalizeWidth(10)} height={normalizeHeight(10)} /> */}

                </Pressable>

            </View>
        </View>
    )
}
export const DynamicIndicatorTab = (props) => {
    const { items, value, onChangeItem } = props
    const [active, setActive] = useState(value?.title === items[0]?.title)
    let transformX = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (active) {
            Animated.timing(transformX, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(transformX, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        }
    }, [active]);

    const rotationX = transformX.interpolate({
        inputRange: [0, 1],
        outputRange: [2, ((Dimensions.get('screen').width - 16) / items.length)]
    })
    return (
        <View style={{
            backgroundColor: global.color.navyblueColor,
            borderRadius: 10,
            overflow: 'hidden',
        }}>
            <View style={{
                height: normalizeHeight(2),
                position: 'absolute',
                bottom: 0,
                backgroundColor: global.color.slateGrey,
                width: '100%',
                borderRadius: normalizeHeight(10),

            }} />
            <Animated.View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    zIndex: 1,
                    height: normalizeHeight(2),
                    borderRadius: 10,
                    width: ((Dimensions.get('screen').width - 16) / items.length),
                    transform: [
                        {
                            translateX: rotationX
                        }
                    ],
                    backgroundColor: global.color.crystalBlue,

                }}
            />
            <FlatList data={items} keyExtractor={({ _, index }) => index}
                horizontal
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingHorizontal: normalizeWidth(4),
                    paddingVertical: normalizeHeight(4),
                }}
                renderItem={({ item }) => {

                    if (item?.image) {
                        return (
                            <Pressable style={{
                                paddingHorizontal: normalizeWidth(55),
                                paddingVertical: normalizeHeight(7),
                                borderRadius: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                                onPress={() => {
                                    onChangeItem(item.title)
                                    setActive(!(item === items[0]))
                                }}
                            >
                                {/* <Image
                                    name={item.image}
                                    width={normalizeWidth(20)}
                                    height={normalizeHeight(16)} /> */}
                                <Text style={{
                                    color: item?.title === value ? global.color.crystalBlue : 'white',
                                    fontWeight: '600',
                                    fontSize: normalizeHeight(16),
                                    lineHeight: normalizeHeight(19),
                                    textAlign: 'center',
                                    marginLeft: normalizeWidth(8)
                                }}>{item?.title}</Text>
                            </Pressable>
                        )
                    } else {

                        return (
                            <Pressable style={{
                                paddingHorizontal: normalizeWidth(55),
                                paddingVertical: normalizeHeight(7),
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                onPress={() => {
                                    onChangeItem(item)
                                    setActive(!(item === items[0]))
                                }}
                            >
                                <Text style={{
                                    color: item?.title === value?.title ? global.color.crystalBlue : 'white',

                                    fontWeight: '600',
                                    fontSize: normalizeHeight(16),
                                    lineHeight: normalizeHeight(19),
                                    textAlign: 'center'
                                }}>{item?.title}</Text>
                            </Pressable>
                        )
                    }

                }}

            />

        </View>
    )
}


export const ButtonTab = (props) => {
    const { data, value, onChangeValue } = props

    const [dataset, setDataSet] = useState(data[0])
    useEffect(() => {
        onChangeValue(dataset?.title)
    }, [])
    if (data.length > 3) {

        return (
            <View style={{
            }}>
                {/* <ButtonTabIndicator /> */}
                <FlatList data={data}
                    horizontal={true}
                    contentContainerStyle={{
                        justifyContent: 'space-between'
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={{
                                backgroundColor: value === item?.title ? global.color.crystalBlue : global.color.navyblueColor,
                                height: normalizeHeight(24),
                                paddingHorizontal: normalizeHeight(16),
                                // width:normalizeWidth((Dimensions.get('screen').width-96)/DATA.length),
                                marginRight: normalizeWidth(16),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 22,
                            }}
                                onPress={() => { onChangeValue(item?.title) }}
                            >
                                <Text style={{
                                    color: global.color.white,
                                    fontSize: normalizeHeight(12),
                                }}>{item?.title}</Text>
                            </Pressable>
                        )
                    }}
                />
            </View>
        )
    }
    else {
        return (
            <View style={{
            }}>
                {/* <ButtonTabIndicator /> */}
                <FlatList data={data}
                    horizontal={true}
                    contentContainerStyle={{
                        justifyContent: 'space-between'
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={{
                                backgroundColor: value === item?.title ? global.color.crystalBlue : global.color.navyblueColor,
                                height: normalizeHeight(28),
                                paddingHorizontal: normalizeHeight(16),
                                width: normalizeWidth((Dimensions.get('screen').width - 96) / data.length),
                                marginRight: normalizeWidth(16),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 22,
                            }}
                                onPress={() => { onChangeValue(item?.title) }}
                            >
                                <Text style={{
                                    color: global.color.white,
                                    fontSize: normalizeHeight(12),
                                }}>{item?.title}</Text>
                            </Pressable>
                        )
                    }}
                />
            </View>
        )
    }

}

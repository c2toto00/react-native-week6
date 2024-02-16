import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const URL = "https://api.open-meteo.com/v1/forecast";

export default function Weather(props){
    const [temp, setTemp] = useState(0);
    const [degreeMark, setDegreeMark] = useState("");
    const [message, setMessage] = useState("Retrieving data...");

    
    useEffect(() => {
        const url = URL + 
            "?latitude=" + props.latitude +
            "&longitude=" + props.longitude +
            "&current=temperature_2m&timezone=auto&forecast_days=7";

        fetch(url)
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setTemp(json.current.temperature_2m)
                setDegreeMark(json.current_units.temperature_2m)
                setMessage("Data retrieved successfully")
            }).catch((error) => {
                console.log(error);
                setMessage("Error retrieving data")
            })
    }, []);

    return (
        <View>
            <Text style={{fontWeight: "bold", paddingTop: 25}}>Current temperature: {temp} {degreeMark}</Text>
            <Text>{message}</Text>
        </View>
    );
}
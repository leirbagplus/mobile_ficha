import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tab_Routes from "./tab_routes";
import { CharacterList } from "../Personagens/componetes/CharacterList";

const Stack = createNativeStackNavigator();

export default function Stack_Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            options={{
                headerShown:false
            }}
                name="Personagens"
                component={CharacterList}
            />
            
            <Stack.Screen
             options={{
                headerShown:false
            }}
                name="Ficha"
                component={Tab_Routes}
            />
        </Stack.Navigator>
    )
}
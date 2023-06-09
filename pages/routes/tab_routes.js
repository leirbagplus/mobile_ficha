import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Atributos from '../Fichas/Atributos';
import Pericias from '../Fichas/Pericias';
import Itens from '../Fichas/itens';


const Tab = createBottomTabNavigator();
function Tab_Routes() {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
               
                backgroundColor: '#131520',
                borderTopWidth:0,

                height:70
                
            },
            
        }}
        >
            <Tab.Screen 
            name='Atributos' 
            component={Atributos}
            options={{
                headerShown:false,
                tabBarIcon:({focused}) =>{
                    if(focused){
                        return <Ionicons name="person" size={30} color="#D72145" />
                    }
                    
                    return <Ionicons name="person-outline" size={30} color="#fff" />
                }
            }}
             />

            <Tab.Screen 
            name='Pericias' 
            component={Pericias} 
            options={{
                headerShown:false,
                tabBarIcon:({focused}) =>{
                    if(focused){
                        return <Ionicons name="book" size={30} color="#D72145" />
                    }
                    
                    return <Ionicons name="book-outline" size={30} color="#fff" />
                }
            }}
            />

            <Tab.Screen
             name='Itens' 
             component={Itens} 
             options={{
                headerShown:false,
                tabBarIcon:({focused}) =>{
                    if(focused){
                        return<MaterialCommunityIcons name="shield-sword" size={30} color="#D72145" />
                    }
                    
                    return <MaterialCommunityIcons name="shield-sword-outline" size={30} color="#fff" />
                }
            }}
            />

        </Tab.Navigator>
    )

}

export default Tab_Routes
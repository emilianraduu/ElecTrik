import Form from '../../molecules/Form/Form';
import {API_URL} from "../../../../static/constants/constants";

require('./Register.scss');

export default class Register {
    constructor() {
        let data = {}


        this.registerForm = new Form({
                inputArray: [
                    {
                        name: 'first_name',
                        labelName: 'First Name',
                        id: 'first_name',
                        placeholder: 'Insert your first name',
                        type: 'text',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'last_name',
                        labelName: 'Last Name',
                        id: 'last_name',
                        placeholder: 'Insert your last name',
                        type: 'text',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'email',
                        labelName: 'Email',
                        id: 'email',
                        placeholder: 'Insert your email',
                        type: 'text',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'password',
                        labelName: 'Password',
                        id: 'password',
                        placeholder: 'Type your password',
                        type: 'password',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'phone',
                        labelName: 'Phone Number',
                        id: 'phone',
                        placeholder: 'Type your phone number',
                        type: 'number',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'country',
                        labelName: 'Country',
                        id: 'country',
                        placeholder: 'Select your country',
                        type: 'select',
                        options: [],
                        onChange: () => {
                        }
                    },
                    {
                        name: 'region',
                        labelName: 'Region',
                        id: 'region',
                        placeholder: 'Select your region',
                        type: 'select',
                        options: [],
                        onChange: () => {
                        }
                    },
                ],
                formTitle: 'Register',
                onSubmit: async () => {
                    data = this.registerForm.getValues();
                    data.company_id = 1;
                    data.title = 'local';
                    data.auth_token = '';
                    data.token = '';
                    data.location = 'botosani';
                    await fetch(`${API_URL}/auth/register`, {
                        method: 'post',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
                    })
                }

                ,
                btn: {
                    type: 'button',
                    innerText: 'Register'

                }
            }
        )
        this.component = document.createElement('div');
        this.initiateMap()
        this.component.appendChild(this.registerForm.innerHTML())
        return this;
    }

    async initiateMap() {
        let mapDiv = document.createElement('div')
        mapDiv.id = 'map'

        await this.component.appendChild(mapDiv)

        if (document.getElementById('map')) {
            let mymap =  L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 16});
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                accessToken: 'pk.eyJ1IjoiZW1pbGlhbnJhZHV1IiwiYSI6ImNqd3FtcHRodDFjcHIzem9kd3VrNWk0cmwifQ.MWKQQMY1NcNoh2k-u_OMqA'
            }).addTo(mymap);
            var marker;
            map.on('locationfound', function(ev){
                if (!marker) {
                    marker = L.marker(ev.latlng);
                } else {
                    marker.setLatLng(ev.latlng);
                }
            })
        }
    }


}
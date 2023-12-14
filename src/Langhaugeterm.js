
import React, { Component } from 'react'
import Rules from './Rules'
import firebaseApp from './firebase/firebase';
import Studentlayout from "./studentlayout/studentlayout"

export default class Langhaugeterm extends Component {
    constructor() {
        super();
        this.state = {
            language: true,
            rules: ['વિદ્યાર્થી એ સંસ્થા દ્વારા આપેલા સમય પર આવવાનુ રહેશે. જો કોઇ કારણસર આવવામાં મોડું થાય અથવા રજા જોઇતી હોય તો એક દિવસ પહેલા ફેકલ્ટીને જાણ કરવી.',

                ' ઇન્સ્ટિટ્યૂટ ની પ્રોપર્ટી ને નુકશાન કરવું નહિ  જો નુકશાન કરશો તો પ્રવેશ કેન્સલ કરવામાં આવશે અને કોર્ષ ફી રીટર્ન આપવામાં આવશે નહિ .',

                ' ઇન્સ્ટિટ્યૂટ માં એન્ટ્રી વખતે મોબાઇલ સાઇલેન્ટ કરીને આવવુ.',

                ' ઇન્સ્ટિટ્યૂટ માં દાખલ થયા પછી કઈ પણ ચીજ વસ્તુ ખાવી નહિ જો ખાતા પકડાશો તો પ્રેક્ટિ કલ માં બેસવા દેવામાં આવશે નહિ .',

                ' કોર્ષ ની સમય અવધિ અંદાજિ ત હોય છે જે વિદ્યાર્થી ની યાદ શક્તિ તેમજ તેમના પ્રેક્ટિકલ ની સ્પીડ પર આધારિત હોય છે એટલે સમય વધારેપણ થઈ શકે.',

                ' જોબ રિલેટેડ કોર્ષમાં ફેકલ્ટી જે પ્રેક્ટિકલ વર્ક ઘરે બનાવવા માટે આપેલ હોય તે ફરજીયાત કરવાનું રહેશે.',

                ' વિદ્યાર્થી ને કોઈ કારણ થી કોર્ષ કેન્સલ કરવાનો થાય તો કોર્ષની ભરેલી ફી રીટર્ન મળશે નહિ  તેમજ કોર્ષ ટ્રાન્સફર કરવાનો થાય તો શીખેલા કોર્ષની ફી ટ્રાન્સફર થશે નહિ  બાકીની ફી ટ્રાન્સફર કરી આપવામાં આવશે.',

                ' જોબ રિલેટેડ કોર્ષ માં ઇંગ્લિશ લખતા વાંચતા આવડવુ જરૂરી હોવાથી જો ઇંગ્લિશ ના આવડતું હોય તો સ્પોકન ઇંગ્લિ શનો કોર્ષ કોઇપણ ઇન્સ્ટિટ્યૂટ માંથી કરી લેવો જો કોર્ષ પૂરો થતા પહેલા ઇંગ્લિશ ના આવડતું હોય તે વિદ્યાર્થી ની જોબ ની ગેરંટી Decode Softtechની રહેશે નહિ વિદ્યાર્થી નો કોર્ષ પૂર્ણ થયા પછી તેમજ કોર્ષની ફી પૂર્ણ થયા પછી જ ઇન્ટરવ્યૂ માટેમોકલવામાં આવશે ચાલુ કોર્ષમાં ઇન્ટરવ્યૂ માં કેજોબ પર મોકલવામાં આવશે નહિ.',

                ' જોબ રિલેટેડ કોર્ષમાં કોર્ષ પૂરો થાય ત્યાર પછી ઓછા માં ઓછા 3 પ્રોજેક્ટ ફરજીયાત બનાવવાના રહેશે  ત્યારપછી થી જ કંપનીમાં ઇન્ટરવ્યૂ માટેમોકલવામાં આવશે .',

                ' Decode Softtech તરફથી જોબ પર જ્યાં મોકલવામાં આવે ત્યાં ઓછામાં ઓછા 18 મહિ ના નો બોન્ડ રહેશે . જો તમે એ બોન્ડ કરવા માટે તૈયાર ના હોવ તો જોબની જવાબદારી Decode Softtech ની રહેશે નહિ .',

                ' જોબ રિલેટેડ કોર્ષમાં વિદ્યાર્થી ની હાજરી ઓછામાં ઓછી 90% હોવી ફરજીયાત છે.',

                ' જો સતત 3 અઠવાડિયા થી વધુ ગેરહાજર હોય તો પ્રવેશ રદ કરવામાં આવશે અને ફી પરત કરવામાં આવશે નહીં.',
            ],
            Enrules: [
                'The student has to come at the time given by the institute. In case of coming late for any reason or leave is required, inform the faculty one day in advance.',

                'Do not damage the property of the Institute, if you do damage, the admission will be canceled and the course fee will not be refunded.',

                'Silence the mobile while entering the institute.',

                'Do not eat anything after entering the institute, if you are caught eating, you will not be allowed to sit in the practical.',

                'The time duration of the course is approximate which depends on the memory power of the student and the speed of his practicals so the time may be extended.',

                'In job related courses practical work given by the faculty to be done at home shall be compulsory.',

                'If the student has to cancel the course due to any reason, the paid course fee will not be refunded and if the course is transferred, the course fee will not be transferred and the remaining fee will be transferred.',

                'Since it is necessary to be able to read and write English in job related courses, if you do not know English, then take a spoken English course from any institute. Only after completion of the course fee will be sent for the interview and will not be sent for interview or job in the ongoing course.',

                'In the job related course, after the completion of the course, at least 3 projects will have to be made compulsory, only after that they will be sent for the interview in the company.',

                'There will be a bond of at least 18 months from Decode Softech where sent on the job. If you are not ready to do that bond then Decode Softech will not be responsible for the job.',

                'At least 90% attendance of the student in the job related course is mandatory.',

                'If the student is absent for more than 3 consecutive weeks, the admission will be canceled and the fee will not be refunded.'
            ],
            id: "",
            currentuser: [],
            sc: localStorage.getItem('sc'),

        }
    }



    componentDidMount() {
        const url = window.location.href;
        var ids = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id: ids }, () => {
            this.getalldatas();
        })
    }



    getalldatas = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ currentuser: doc.data() }, () => {
                    this.setState({ currentdata: doc.data(), email: doc.data().email, dob: doc.data().dob, profile: doc.data().profile_img ? doc.data().profile_img : '', line_1: doc.data().line_1, line_2: doc.data().line_2, city: doc.data().city }, () => {
                        if (Number(localStorage.getItem('userrole')) !== 2) {
                            if (this.state.sc !== this.state.currentdata.password) {
                                window.location.href = '/'
                            }
                        }
                    })
                })
            });
        }).catch(err => {
            console.error(err)
        });
    }

    chagees = () => {
        this.setState({ language: !this.state.language })
    }

    render() {
        return (
            <>
                <Studentlayout >
                    <div className='content-main-section left'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12' style={{ textAlign: "end " }}>
                                    <button className="btn btn-primary primary-btn mt-5" onClick={this.chagees}>{this.state.language == true ? 'English' : 'Gujarati'}</button>
                                </div>
                            </div>
                            <ul className='rules'>
                                {this.state.language == 0 ?
                                    this.state.Enrules.map((number, i) =>
                                        <li className='text-justify' key={i}>{number}</li>
                                    ) : this.state.rules.map((number, i) =>
                                        <li className='text-justify' key={i}>{number}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                </Studentlayout>
            </>
        )
    }
}

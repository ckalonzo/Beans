import React, { Component } from "react";
import Picture from "./components/picture";
import OutlinedTextFields from "../component/multiline-Input";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Button from "../../Global/Input/Button";
import { userDataCollection } from "../../Redux/Store/actions/profileAuctions";
import * as actionTypes from "../../Redux/Store/actions/actionTypes/ta-actionTypes";
import { Link } from "react-router-dom";
import TextInput from "../../Global/Input/TextInput";
import "../sass/updateProfile.scss";
const phoneRGX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      rating: "",

      bio: "",
      numberOfJobs: "",
      typeOfJobs: [],
      years: "",
      bkcheck: false,
      basicinfochk: false,
      companyName: "",
      history: "",
      bids: "",
      update: false,
      services: [
        { value: "Junk_Removal", label: "Junk Removal" },
        { value: "Delivery", label: "Delivery" },
        { value: "Handy_Man", label: "Handy Man" },
        { value: "Cleaning_Service", label: "Cleaning Service" }
      ],
      profile: "",
      validForm: false,
      errors: [],
      errorMessage: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  render() {
    const contractorProfile = this.props.contractorProfile;
    console.log(this.state);
    console.log(contractorProfile);
    const service = [
      { value: "Junk_Removal", label: "Junk Removal" },
      { value: "Delivery", label: "Delivery" },
      { value: "Handy_Man", label: "Handy Man" },
      { value: "Cleaning_Service", label: "Cleaning Service" }
    ];
    return (
      <div>
        <section>
          <div id="profile" className="container">
            <form onSubmit={this.update} ref={form => (this.form = form)}>
              <div className="form-row">
                <div className="col">
                  <Picture />
                </div>
              </div>
              <div className="form-row -ta_mt-30">
                <div className="col">
                  <TextInput
                    type={"text"}
                    name={"firstName"}
                    id={"firstName"}
                    className={"form-control input-lg"}
                    placeholder={"First Name"}
                    tabIndex={"0"}
                    onChange={this.handleChange("firstName")}
                    value={this.state.firstName}
                  />
                </div>
                <div className="col">
                  <input
                    type={"text"}
                    name={"lastName"}
                    id={"lastName"}
                    className={"form-control input-lg"}
                    placeholder={"Last Name"}
                    tabIndex={"2"}
                    onBlur={this.onBlur}
                    onChange={this.handleChange("lastName")}
                    // value={this.state.lastName}
                    //ref={this.input}
                  />
                </div>
              </div>
              <div className="form-row -ta_mt-10">
                <div className="col">
                  <TextInput
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    className={"form-control input-lg"}
                    placeholder={"Email"}
                    tabIndex={"3"}
                    onBlur={this.onBlur}
                    onChange={this.handleChange("email")}
                  />
                </div>
                <div className="col">
                  <TextInput
                    type={"tel"}
                    name={"phone"}
                    id={"phone"}
                    className={"form-control input-lg"}
                    placeholder={"Phone"}
                    tabIndex={"4"}
                    onBlur={this.onBlur}
                    onChange={this.handleChange("Phone")}
                  />
                </div>
              </div>
              <div className="form-row -ta_mt-10">
                <div className="col">
                  <TextInput
                    type={"password"}
                    name={"password"}
                    id={"password"}
                    className={"form-control input-lg"}
                    placeholder={"Password"}
                    tabIndex={"5"}
                    onBlur={this.onBlur}
                    onChange={this.handleChange("Password")}
                  />
                </div>
                <div className="col">
                  <TextInput
                    type={"password"}
                    name={"confirmPassword"}
                    id={"confirmPassword"}
                    className={"form-control input-lg"}
                    placeholder={"Confirm Password"}
                    tabIndex={"6"}
                    onBlur={this.onBlur}
                    onChange={this.handleChange("confirmPassword")}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <TextInput
                    type={"text"}
                    name={"address1"}
                    id={"address1"}
                    className={"form-control input-lg -ta_mt-10"}
                    placeholder={"Address1"}
                    tabIndex={"7"}
                    onBlur={this.onBlur}
                    onChange={e => {
                      this.props.actions.updateProfile(
                        e.target.id,
                        e.target.value
                      );
                    }}
                    ref={this.input}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <TextInput
                    type={"text"}
                    name={"address2"}
                    id={"address2"}
                    className={"form-control input-lg -ta_mt-10"}
                    placeholder={"Address2"}
                    tabIndex={"8"}
                    onBlur={this.onBlur}
                    onChange={this.handleChange}
                    ref={this.input}
                  />
                </div>
              </div>
              <div className="form-row -ta_mt-10">
                <div className="col">
                  <TextInput
                    type={"text"}
                    name={"city"}
                    id={"city"}
                    className={"form-control input-lg"}
                    placeholder={"City"}
                    tabIndex={"9"}
                    onBlur={this.onBlur}
                    onChange={this.handleChange}
                    value={this.state.city}
                  />
                </div>
                <div className="col">
                  <select
                    className="form-control"
                    id="state"
                    name="state"
                    tabIndex={"10"}
                    onChange={this.handleChange}
                    value={this.state.state}
                  >
                    <option value=""></option>
                    <option value="">Alabama</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value="CO"></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value="DC"></option>
                    <option value="FL"></option>
                    <option value="GA"></option>
                    <option value="HI"></option>
                    <option value="ID"></option>
                    <option value="IL"></option>
                    <option value="IN"></option>
                    <option value="IA"></option>
                    <option value="KS"></option>
                    <option value="KY"></option>
                    <option value="LA"></option>
                    <option value="ME"></option>
                    <option value="MD"></option>
                    <option value="MA"></option>
                    <option value="MI"></option>
                    <option value="MN"></option>
                    <option value="MS"></option>
                    <option value="MO"></option>
                    <option value="MT"></option>
                    <option value="NE"></option>
                    <option value="NV"></option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ"></option>
                    <option value="NM"></option>
                    <option value="NY"></option>
                    <option value="NC"></option>
                    <option value="ND"></option>
                    <option value="OH"></option>
                    <option value="OK"></option>
                    <option value="OR">Oregon</option>
                    <option value="PA"></option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC"></option>
                    <option value="SD"></option>
                    <option value="TN"></option>
                    <option value="TX"></option>
                    <option value="UT"></option>
                    <option value="VT"></option>
                    <option value="VA"></option>
                    <option value="WA"></option>
                    <option value="WV"></option>
                    <option value="WI"></option>
                    <option value="WY"></option>
                  </select>
                </div>
              </div>
              <div className="form-row -ta_mt-10">
                <div className="col">
                  <TextInput
                    type={"text"}
                    name={"zip"}
                    id={"zip"}
                    className={"form-control input-lg"}
                    placeholder={"Zip"}
                    tabIndex={"11"}
                    onBlur={this.onBlur}
                    onChange={this.handleChange}
                    value={this.state.zip}
                  />
                </div>
                <div className="col">
                  <select
                    className="form-control"
                    id="country"
                    name="country"
                    tabIndex={"12"}
                    onChange={this.onChange}
                    value={contractorProfile.country}
                  >
                    <option value="">Country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">
                      Congo, the Democratic Republic of the
                    </option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">
                      Heard Island and McDonald Islands
                    </option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">
                      Macedonia, the former Yugoslav Republic of
                    </option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">
                      Saint Helena, Ascension and Tristan da Cunha
                    </option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">
                      Venezuela, Bolivarian Republic of
                    </option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <select
                  className="form-control basic-multi-select"
                  isMulti
                  id="service"
                  name="service"
                  multiple="multiple"
                  options={contractorProfile.services}
                  classNamePrefix="Services"
                >
                  tabIndex={"11"}
                  onChange= onChange={this.handleChange}
                  value={this.state.typeOfJobs}>
                </select>
              </div>

              <div className="form-group row">
                <div className="col-12 -ta_mt-25">
                  <textarea
                    rows="10"
                    className="col-12"
                    onChange={this.handleChange}
                    value={this.state.bio}
                  ></textarea>
                </div>
              </div>
              <div className="form-row -ta_mt-30">
                <div className="col text-center">
                  <button
                    className="btn btn-primary"
                    tabIndex={"13"}
                    onClick={this.handleSubmit}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    contractorProfile: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: udpCollection =>
      dispatch({
        type: actionTypes.UPDATE_PROFILE_SUCCESS,
        userDataCollection: udpCollection
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);

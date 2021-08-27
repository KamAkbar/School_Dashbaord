<template>
  <section class="sign">
    <div class="form_wrapper">
      <div class="form_container">
        <div class="title_container">
          <h2>Sign Up</h2>
        </div>
        <div class="row clearfix">
          <div class="">
            <form>
              <div class="input_field">
                <!-- <span><svg class="slds-icon slds-icon-text-default test-class" aria-hidden="true"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#email"></use></svg></span> -->
                <input
                  v-model="sign.email"
                  :class="{ error: $v.sign.email.$error }"
                  @blur="$v.sign.email.$touch"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="input_field">
                <!-- <span><i aria-hidden="true" class="fa fa-lock"></i></span> -->
                <input
                  :class="{ error: $v.sign.password.$error }"
                  @blur="$v.sign.password.$touch"
                  type="password"
                  name="password"
                  v-model="sign.password"
                  placeholder="Password"
                  v-model.trim="$v.sign.password.$model"
                  required
                />
                <div class="error" v-if="!$v.sign.password.minLength">
                  Password must have at least
                  {{ $v.sign.password.$params.minLength.min }} letters.
                </div>
              </div>
              <div
                
                class="input_field"
              >
                <!-- <span><i aria-hidden="true" class="fa fa-lock"></i></span> -->
                <input
                  :class="{ error: $v.sign.confirmPassword.$error }"
                  @blur="$v.sign.confirmPassword.$touch"
                  type="password"
                  v-model="sign.confirmPassword"
                  v-model.trim="$v.sign.confirmPassword.$model"
                  name="password"
                  placeholder="Re-type Password"
                  required
                />
                <div
                  class="error"
                  v-if="!$v.sign.confirmPassword.sameAsPassword"
                >
                  Passwords must be identical.
                </div>
                <tree-view
                  :data="$v"
                  :options="{ rootObjectKey: '$v', maxDepth: 2 }"
                ></tree-view>
              </div>
              <div class="row clearfix">
                <div class="col_half">
                  <div class="input_field">
                    <!-- <span><i aria-hidden="true" class="fa fa-user"></i></span> -->
                    <input
                      :class="{ error: $v.sign.name.$error }"
                      @blur="$v.sign.name.$touch"
                      type="text"
                      v-model="sign.name"
                      name="name"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div class="col_half">
                  <div class="input_field">
                    <!-- <span><i aria-hidden="true" class="fa fa-user"></i></span> -->
                    <input
                      :class="{ error: $v.sign.surname.$error }"
                      @blur="$v.sign.surname.$touch"
                      type="text"
                      name="name"
                      v-model="sign.surname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="input_field radio_option">
                <input
                  :class="{ error: $v.sign.signgender.$error }"
                  @blur="$v.sign.signgender.$touch"
                  v-model="sign.signgender"
                  type="radio"
                  value="Male"
                  name="radiogroup1"
                  id="Female"
                />
                <label for="Female">Male</label>
                <input
                  :class="{ error: $v.sign.signgender.$error }"
                  @blur="$v.sign.signgender.$touch"
                  v-model="sign.signgender"
                  type="radio"
                  name="radiogroup1"
                  value="Female"
                  id="Male"
                />
                <label for="Male">Female</label>
              </div>
              <div class="input_field select_option">
                <select v-model="sign.country">
                  <option>Select a country</option>
                  <option value="Afganistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bonaire">Bonaire</option>
                  <option value="Bosnia & Herzegovina">
                    Bosnia & Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Ter">
                    British Indian Ocean Ter
                  </option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Canary Islands">Canary Islands</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Channel Islands">Channel Islands</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Island">Cocos Island</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote DIvoire">Cote DIvoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curaco">Curacao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Ter">
                    French Southern Ter
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Great Britain">Great Britain</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea North">Korea North</option>
                  <option value="Korea Sout">Korea South</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Midway Islands">Midway Islands</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Nambia">Nambia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherland Antilles">
                    Netherland Antilles
                  </option>
                  <option value="Netherlands">
                    Netherlands (Holland, Europe)
                  </option>
                  <option value="Nevis">Nevis</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau Island">Palau Island</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Phillipines">Philippines</option>
                  <option value="Pitcairn Island">Pitcairn Island</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic of Montenegro">
                    Republic of Montenegro
                  </option>
                  <option value="Republic of Serbia">Republic of Serbia</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="St Barthelemy">St Barthelemy</option>
                  <option value="St Eustatius">St Eustatius</option>
                  <option value="St Helena">St Helena</option>
                  <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                  <option value="St Lucia">St Lucia</option>
                  <option value="St Maarten">St Maarten</option>
                  <option value="St Pierre & Miquelon">
                    St Pierre & Miquelon
                  </option>
                  <option value="St Vincent & Grenadines">
                    St Vincent & Grenadines
                  </option>
                  <option value="Saipan">Saipan</option>
                  <option value="Samoa">Samoa</option>
                  <option value="Samoa American">Samoa American</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome & Principe">
                    Sao Tome & Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tahiti">Tahiti</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Erimates">
                    United Arab Emirates
                  </option>
                  <option value="United States of America">
                    United States of America
                  </option>
                  <option value="Uraguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City State">Vatican City State</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands (Brit)">
                    Virgin Islands (Brit)
                  </option>
                  <option value="Virgin Islands (USA)">
                    Virgin Islands (USA)
                  </option>
                  <option value="Wake Island">Wake Island</option>
                  <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zaire">Zaire</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                <div class="select_arrow"></div>
              </div>
              <div class="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label for="cb1">I agree with terms and conditions</label>
              </div>
              <div class="input_field checkbox_option">
                <input type="checkbox" id="cb2" />
                <label for="cb2">I want to receive the newsletter</label>
              </div>
              <router-link to="/#"><input
                @click="signup()"
                class="button"
                type="submit"
                value="Register"
              /></router-link>
            </form>
            <p class="login">
              Already have an account?
              <router-link to="/login">Log In</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "Sign",
  data() {
    return {
      sign: {
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        surname: "",
        signgender: "",
        country: "",
      },
    };
  },
  validations: {
    sign: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { sameAsPassword: sameAs("password") },
      name: { required },
      surname: { required },
      signgender: { required },
      country: { required },
    },
  },
  methods: {
    signup() {
      this.$v.touch;
      if (!this.$v.sign.email.$error) {
        this.$store.commit("getSigns", this.sign);
        this.$store.dispatch("saveSignDataToLocalStorage");
        this.sign = {};
        this.$router.push("#")
      }
    },
  },
};
</script>
<style lang="scss">
$blue: #283044;
$black: #000000;
$grey: #cccccc;
$green: #42b983;

body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 14px;
  background: #f2f2f2;
}
.clearfix {
  &:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
  }
}
.form_wrapper {
  background: #fff;
  width: 400px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 25px;
  margin: 2% auto 0;
  position: relative;
  z-index: 1;
  border-top: 5px solid $blue;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: none;
  transition: none;
  -webkit-animation: expand 0.8s 0.6s ease-out forwards;
  animation: expand 0.8s 0.6s ease-out forwards;
  opacity: 0;
  h2 {
    font-size: 1.5em;
    line-height: 1.5em;
    margin: 0;
  }
  .title_container {
    text-align: center;
    padding-bottom: 15px;
  }
  h3 {
    font-size: 1.1em;
    font-weight: normal;
    line-height: 1.5em;
    margin: 0;
  }
  label {
    font-size: 12px;
  }
  .row {
    margin: 10px -15px;
    > div {
      padding: 0 15px;
      box-sizing: border-box;
    }
  }
  .col_half {
    width: 50%;
    float: left;
  }
  .input_field {
    position: relative;
    margin-bottom: 20px;
    -webkit-animation: bounce 0.6s ease-out;
    animation: bounce 0.6s ease-out;
    > span {
      position: absolute;
      left: 0;
      top: 0;
      color: #333;
      height: 100%;
      border-right: 1px solid $grey;
      text-align: center;
      width: 30px;
      > i {
        padding-top: 10px;
      }
    }
  }
  .textarea_field {
    > span {
      > i {
        padding-top: 10px;
      }
    }
  }
  input {
    &[type="text"],
    &[type="email"],
    &[type="password"] {
      width: 100%;
      padding: 8px 10px 9px 15px;
      height: 35px;
      border: 1px solid $grey;
      box-sizing: border-box;
      outline: none;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    &[type="text"]:hover,
    &[type="email"]:hover,
    &[type="password"]:hover {
      background: #fafafa;
    }
    &[type="text"]:focus,
    &[type="email"]:focus,
    &[type="password"]:focus,
    select {
      --webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      border: 1px solid $grey, 01;
      background: #fafafa;
    }
    &[type="submit"] {
      background: $blue;
      height: 35px;
      line-height: 35px;
      width: 100%;
      border: none;
      outline: none;
      cursor: pointer;
      color: #fff;
      font-size: 1.1em;
      margin-bottom: 10px;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: darken($blue, 7%);
      }
      &:focus {
        background: darken($blue, 7%);
      }
    }
    &[type="checkbox"],
    &[type="radio"] {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
}
.form_container {
  .row {
    .col_half.last {
      border-left: 1px solid $grey;
    }
  }
}
.checkbox_option {
  label {
    margin-right: 1em;
    position: relative;
    &:before {
      content: "";
      display: inline-block;
      width: 1em !important;
      height: 1em !important;
      margin-right: 0.5em;
      vertical-align: -2px;
      border: 2px solid $grey;
      padding: 0.12em;
      background-color: transparent;
      background-clip: content-box;
      transition: all 0.2s ease;
    }
    &:after {
      border-right: 2px solid $black;
      border-top: 2px solid $black;
      content: "";
      height: 20px;
      left: 2px;
      position: absolute;
      top: 7px;
      transform: scaleX(-1) rotate(135deg);
      transform-origin: left top;
      width: 7px;
      display: none;
    }
  }
  input {
    &:hover + label:before {
      border-color: $green;
    }
    &:checked + label {
      &:before {
        border-color: $black;
      }
      &:after {
        -moz-animation: check 0.8s ease 0s running;
        -webkit-animation: check 0.8s ease 0s running;
        animation: check 0.8s ease 0s running;
        display: block;
        width: 7px;
        height: 20px;
        border-color: $green;
      }
    }
  }
}
.radio_option {
  label {
    margin-right: 1em;
    &:before {
      content: "";
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-right: 0.5em;
      border-radius: 100%;
      vertical-align: -3px;
      border: 2px solid $green;
      padding: 0.15em;
      background-color: transparent;
      background-clip: content-box;
      transition: all 0.2s ease;
    }
  }
  input {
    &:hover + label:before {
      border-color: $black;
    }
    &:checked + label:before {
      background-color: $black;
      border-color: $green;
    }
  }
}
.select_option {
  position: relative;
  width: 100%;
  select {
    display: inline-block;
    width: 100%;
    height: 35px;
    padding: 0px 15px;
    cursor: pointer;
    color: #7b7b7b;
    border: 1px solid $grey;
    border-radius: 0;
    background: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: all 0.2s ease;
    &::-ms-expand {
      display: none;
    }
    &:hover,
    &:focus {
      color: $black;
      background: #fafafa;
      border-color: $black;
      outline: none;
    }
  }
}
.dirty {
  border-color: #5a5;
  background: #efe;
}

.dirty:focus {
  outline-color: #8e8;
}

.error {
  border-color: red;
  background: #fdd;
}

.error:focus {
  outline-color: #f99;
}
.select_arrow {
  position: absolute;
  top: calc(50% - 4px);
  right: 15px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-width: 8px 5px 0 5px;
  border-style: solid;
  border-color: #7b7b7b transparent transparent transparent;
}

.select_option select {
  &:hover + .select_arrow,
  &:focus + .select_arrow {
    border-top-color: $black;
  }
}
.login {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 15px;
  color: $blue;
  a {
    color: darken($blue, 7%);
  }
}
@-webkit-keyframes check {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 7px;
  }
  50% {
    height: 20px;
    width: 7px;
  }
}

@keyframes check {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 7px;
  }
  50% {
    height: 20px;
    width: 7px;
  }
}

@-webkit-keyframes expand {
  0% {
    -webkit-transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale3d(1, 1.2, 1);
  }
  50% {
    -webkit-transform: scale3d(1, 0.85, 1);
  }
  75% {
    -webkit-transform: scale3d(1, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}

@keyframes expand {
  0% {
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale3d(1, 1.2, 1);
    transform: scale3d(1, 1.2, 1);
  }
  50% {
    -webkit-transform: scale3d(1, 0.85, 1);
    transform: scale3d(1, 0.85, 1);
  }
  75% {
    -webkit-transform: scale3d(1, 1.05, 1);
    transform: scale3d(1, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}

@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    -webkit-transform: translate3d(0, 10px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -6px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 2px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, -25px, 0);
    transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -6px, 0);
    transform: translate3d(0, -6px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 2px, 0);
    transform: translate3d(0, 2px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@media (max-width: 600px) {
  .form_wrapper {
    .col_half {
      width: 100%;
      float: none;
    }
  }
  .bottom_row {
    .col_half {
      width: 50%;
      float: left;
    }
  }
  .form_container {
    .row {
      .col_half.last {
        border-left: none;
      }
    }
  }
  .remember_me {
    padding-bottom: 20px;
  }
}
</style>

import admin from "./assets/icon/admin.svg";
import mikeactive from "./assets/icon/mikeActive.svg";
import mikedeactive from "./assets/icon/mikeDeact.svg";
import call from "./assets/icon/call.png";
import callLeave from "./assets/icon/callLeave.png";
import soundOn from "./assets/icon/soundOn.png";
import soundOff from "./assets/icon/soundOff.png";
import camera from "./assets/icon/camera.svg";
import fullscreen from "./assets/icon/fullscreen.svg";
import audio from "./assets/icon/audio.png";
import settings from "./assets/icon/settings.svg";
import logo from "./assets/Logo/logo.svg";
import menu from "./assets/Logo/menu.png";
import cross from "./assets/icon/cross.svg";

function App() {
  return (
    <div>
      <main className="main__body">
        <div className="admine  absolute top-[257px] flex">
          <div className="adminImg w-[49px] h-[57px] flex justify-center items-center bg-[#000c] cursor-pointer">
            <img className="" src={admin} alt="icon" />
          </div>

          <div className="admin__logs bg-[#000c] w-[330px]">
            <ul className="ps-[24px] pb-[24px] pt-[10px] pe-[10px]">
              <li className="flex items-center justify-between h-[60px] border-b-[1px] border-[#ccc]">
                <div className="text-[#fff]">
                  <span className="text-[16px] leading-[20px]">USERNAME1</span>{" "}
                  <br />
                  <span>(Host)</span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <span className="mike mikeAct">
                      <img src={mikeactive} alt="icon" />
                    </span>
                    <span className="mike mikeDeact hidden">
                      <img src={mikedeactive} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="call callOn">
                      <img src="assets/image/icon/call.png" alt="icon" />
                    </span>
                    <span className="call callOf hidden">
                      <img src="assets/image/icon/callLeave.png" alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="sound soundOn">
                      <img src="assets/image/icon/soundOn.png" alt="icon" />
                    </span>
                    <span className="sound soundOff hidden">
                      <img src="assets/image/icon/soundOff.png" alt="icon" />
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between h-[60px] border-b-[1px] border-[#ccc]">
                <div className="text-[#fff]">
                  <span className="text-[16px] leading-[20px]">USERNAME1</span>{" "}
                  <br />
                  <span>(You)</span>
                </div>
                <div className="flex items-center gap-[20px] hidden">
                  <div>
                    <span className="mike mikeAct">
                      <img src={mikeactive} alt="icon" />
                    </span>
                    <span className="mike mikeDeact hidden">
                      <img src={mikedeactive} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="call callOn">
                      <img src={call} alt="icon" />
                    </span>
                    <span className="call callOf hidden">
                      <img src={callLeave} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="sound soundOn">
                      <img src={soundOn} alt="icon" />
                    </span>
                    <span className="sound soundOff hidden">
                      <img src={soundOff} alt="icon" />
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between h-[60px] border-b-[1px] border-[#ccc]">
                <div className="text-[#fff]">
                  <span className="text-[16px] leading-[20px]">USERNAME1</span>{" "}
                  <br />
                  {/* <!-- <span>(Host)</span> --> */}
                </div>
                <div className="flex items-center gap-[20px] hidden">
                  <div>
                    <span className="mike mikeAct">
                      <img src={mikeactive} alt="icon" />
                    </span>
                    <span className="mike mikeDeact hidden">
                      <img src={mikedeactive} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="call callOn">
                      <img src={call} alt="icon" />
                    </span>
                    <span className="call callOf hidden">
                      <img src={callLeave} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="sound soundOn">
                      <img src={soundOn} alt="icon" />
                    </span>
                    <span className="sound soundOff hidden">
                      <img src={soundOff} alt="icon" />
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between h-[60px] border-b-[1px] border-[#ccc]">
                <div className="text-[#fff]">
                  <span className="text-[16px] leading-[20px]">USERNAME1</span>{" "}
                  <br />
                  {/* <!-- <span>(Host)</span> --> */}
                </div>
                <div className="flex items-center gap-[20px] hidden">
                  <div>
                    <span className="mike mikeAct">
                      <img src={mikeactive} alt="icon" />
                    </span>
                    <span className="mike mikeDeact hidden">
                      <img src={mikedeactive} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="call callOn">
                      <img src={call} alt="icon" />
                    </span>
                    <span className="call callOf hidden">
                      <img src={callLeave} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="sound soundOn">
                      <img src={soundOn} alt="icon" />
                    </span>
                    <span className="sound soundOff hidden">
                      <img src={soundOff} alt="icon" />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="float__set absolute right-[0px] bottom-[30px]">
          <div className="sound_range h-[48px] bg-[#000c] rounded-[5px] flex justify-center hidden">
            <input type="range" min="1" max="100" value="50" />
          </div>
          <div className="float flex gap-[26px] p-[14px] bg-[#000c] w-[192px] ">
            <img className="capture" src={camera} alt="icon" />
            <img className="square" src={fullscreen} alt="icon" />
            <span>
              <img className="setSound" src={soundOn} alt="icon" />
              <img className="setSound hidden" src={audio} alt="icon" />
            </span>
            <img className="sidebarBtn" src={settings} alt="icon" />
          </div>
        </div>
        <div className="float__com bg-[#000c] max-w-[423px] h-[76px] overflow-hidden absolute right-[16px] top-[20px] p-[12px] text-[#ccc] leading-[28px] grid gap-[] justify-between">
          <span>
            Lorem ipsum dolor sit amet. Et recusandae neque eum voluptate
            delectus qui reiciendis molestiae! Sit aliquam quisquam sit libero
            commodi 33 distinctio illo eum ipsa laudantium. Id placeat
            necessitatibus sed tenetur iste aut optio culpa.
          </span>
          <span>
            <img
              id="cross"
              className="ms-auto cursor-pointer"
              src={cross}
              alt="icon"
            />
          </span>
        </div>

        <div className="sidebar py-[17px] px-[15px] w-[300px] bg-[#000c] text-[#fff] text-[18px]">
          <div className="flex gap-[20px] justify-between items-center mb-[45px]">
            <a href="#!">
              <img src={logo} alt="logo" />
            </a>
            <img
              className="h-[18px] w-[18px] cursor-pointer"
              src={menu}
              alt="icon"
            />
          </div>
          <ul>
            <li>
              <button>Open URL</button>
            </li>
            <li>
              <button>Open Mail App</button>
            </li>
            <li>
              <button>Open Call</button>
            </li>
            <li>
              <button>Open Keyboard</button>
            </li>
            <li>
              <button>Toggle Browser Mouse</button>
            </li>
            <li>
              <button>Increase Session Timer</button>
            </li>
            <li>
              <button>Get User Info</button>
            </li>
            <li>
              <button>Get User Device Info</button>
            </li>
            <li>
              <button>Video Player</button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

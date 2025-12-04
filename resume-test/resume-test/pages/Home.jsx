import { Link } from "react-router-dom";
import { useState } from "react";
import { playClick } from "../components/clickSound";
import { asset } from "../utils/asset";

const BG = asset('assets/img/room.png');

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Plant -> Experience */}
      <Link to="/experience" onClick={playClick}>
        <img src={asset('assets/img/plant.png')} style={{ top: "38%", left: "50%", width: "250px" }} className="absolute hover:scale-110 cursor-pointer" />
      </Link>

      {/* Tennis Ball -> Skills */}
      <Link to="/skills" onClick={playClick}>
        <img src={asset('assets/img/tennisball.png')} style={{ top: "80%", left: "80%", width: "250px" }} className="absolute hover:scale-110 cursor-pointer" />
      </Link>

      {/* Trophy -> Awards */}
      <Link to="/awards" onClick={playClick}>
        <img src={asset('assets/img/trophy.png')} style={{ top: "33%", right: "73%", width: "130px" }} className="absolute hover:scale-110 cursor-pointer" />
      </Link>

      {/* Degree -> Education */}
      <Link to="/education" onClick={playClick}>
        <img src={asset('assets/img/degree.png')} style={{ top: "12%", right: "6%", width: "200px" }} className="absolute hover:scale-110 cursor-pointer" />
      </Link>

      {/* Volunteer */}
      <Link to="/volunteer" onClick={playClick}>
        <img src={asset('assets/img/volunteer.png')} style={{ top: "32%", right: "6%", width: "150px" }} className="absolute hover:scale-110 cursor-pointer" />
      </Link>

      {/* Phone -> Socials */}
      <Link to="/socials" onClick={playClick}>
        <img src={asset('assets/img/phone.png')}
 style={{ top: "48%", right: "46.5%", width: "70px" }} className="absolute hover:scale-110 cursor-pointer" />
      </Link>

      {/* Help Cat */}
      <img
        src={asset('assets/img/help_cat.png')}
        style={{ bottom: "2%", left: "5%", width: "250px" }}
        className="absolute hover:scale-110 cursor-pointer"
        onClick={() => {
          playClick();
          setShowPopup(true);
        }}
      />

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg max-w-sm">
            <p className="text-lg mb-4">
              Try to explore Sonya's room to uncover many mysteries about her!
            </p>
        <button
          onClick={() => {
            playClick();
            setShowPopup(false);
          }}
        className="px-6 py-2 bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white active:scale-95 transition font-medium"
        >
          OK
        </button>

          </div>
        </div>
      )}

    </div>
  );
}

import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link, useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { TbTransactionDollar,TbExchange, TbAddressBookOff,TbGasStation  } from "react-icons/tb"
import { GiToken } from "react-icons/gi"
import { SiWalletconnect } from "react-icons/si";
import { RiNftFill,RiDeviceRecoverLine ,RiSwap3Line } from "react-icons/ri";
import { BsWallet, BsCurrencyExchange, BsBatteryCharging, BsBugFill } from "react-icons/bs";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import "../style/Issues.css"

function Issues() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/import')
  }
  return (
          <div className="explore">
            <h2>Explore your issue</h2>
            <div className="card-container">
              {/* START */}
              {/* start1 */}
              <div className="card" data-aos="fade-right">
                <div class="ag-courses-item_bg"></div>
                <div className="card-details">
                  <div>
                    <p className="text-title">Transaction</p>
                    <p className="text-body">Issues relating to transaction status</p>
                  </div>
                  <TbTransactionDollar className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card" data-aos="fade-up">
                <div class="ag-courses-item_bg"></div>
                <div className="card-details">
                  <div>
                    <p className="text-title">Connect wallet</p>
                    <p className="text-body">Wallet unable to connect and other connection related issues</p>
                  </div>
                  <SiWalletconnect className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card" data-aos="fade-left">
                <div className="card-details">
                  <div>
                    <p className="text-title">Gas fee</p>
                    <p className="text-body">Charges for transaction and gas problem</p>
                  </div>
                  <TbGasStation  className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card" data-aos="fade-down">
                <div className="card-details">
                  <div>
                    <p className="text-title">Memo</p>
                    <p className="text-body">incorrect Memo and Memo other Issues</p>
                  </div>
                  <MdOutlineAutoAwesomeMosaic className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card" data-aos="fade-right">
                <div className="card-details">
                  <div>
                    <p className="text-title">Swapping</p>
                    <p className="text-body">Swapping error and guildance</p>
                  </div>
                  <TbExchange className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card" data-aos="fade-left">
                <div className="card-details">
                  <div>
                    <p className="text-title">Token Recovery</p>
                    <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                  <RiDeviceRecoverLine  className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card" data-aos="fade-down">
                <div className="card-details">
                  <div>
                    <p className="text-title">V4 to V5</p>
                    <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                  <RiSwap3Line  className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card" data-aos="fade-right">
                <div className="card-details">
                  <div>
                    <p className="text-title">Wrong Address</p>
                    <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                  <TbAddressBookOff className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              <div className="card" data-aos="fade-up">
                <div className="card-details">
                  <div>
                    <p className="text-title">Exchanges</p>
                    <p className="text-body">Status of your transaction</p>
                  </div>
                  <BsCurrencyExchange className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card" data-aos="fade-left">
                <div className="card-details">
                  <div>
                    <p className="text-title">Login</p>
                    <p className="text-body">Having issue with login</p>
                  </div>
                  <BiLogInCircle className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card" data-aos="fade-down">
                <div className="card-details">
                  <div>
                    <p className="text-title">Transaction Delay</p>
                    <p className="text-body">Status of your transaction</p>
                  </div>
                  <BsBugFill className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card" data-aos="fade-right">
                <div className="card-details">
                  <div>
                    <p className="text-title">Battery</p>
                    <p className="text-body">Status of your transaction</p>
                  </div>
                  <BsBatteryCharging className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card" data-aos="fade-up">
                <div className="card-details">
                  <div>
                    <p className="text-title">NFTs</p>
                    <p className="text-body">Transfer error with issue related to swapping</p>
                  </div>
                  <RiNftFill className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card" data-aos="fade-left">
                <div className="card-details">
                  <div>
                    <p className="text-title">Wallet Glitch</p>
                    <p className="text-body">Wallet issue and errors</p>
                  </div>
                  <BsWallet className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card" data-aos="fade-down">
                <div className="card-details">
                  <div>
                    <p className="text-title">Withdrawal</p>
                    <p className="text-body">Wallet issue and errors</p>
                  </div>
                  <GiToken className="icon" fontSize={45} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* END */}
            </div>
          </div>
  )
}

export default Issues;
import ETHlogo from "./assets/images/ETH-logo.png"
import MATIClogo from "./assets/images/MATIC-logo.png"
import AAVElogo from "./assets/images/AAVE-logo.png"
import DAIlogo from "./assets/images/DAI-logo.png"
import LINKlogo from "./assets/images/LINK-logo.png"
import USDClogo from "./assets/images/USDC-logo.png"
import USDTlogo from "./assets/images/USDT-logo.png"
import WBTClogo from "./assets/images/WBTC-logo.png"
import BUSDlogo from "./assets/images/BUSD-logo.png"
import COMPlogo from "./assets/images/COMP-logo.png"
import LRClogo from "./assets/images/LRC-logo.png"
import SNXlogo from "./assets/images/SNX-logo.png"
import TUSDlogo from "./assets/images/TUSD-logo.png"
import UNIlogo from "./assets/images/UNI-logo.png"
import YFIlogo from "./assets/images/YFI-logo.png"
import SUSDlogo from "./assets/images/SUSD-logo.png"
import SUSHIlogo  from "./assets/images/SUSHI-logo.png"
import BALlogo  from "./assets/images/BAL-logo.png"
import CRVlogo  from "./assets/images/CRV-logo.png"
import MKRlogo  from "./assets/images/MKR-logo.png"
import HHTlogo from "./assets/images/HHT-logo.png"
import HUSDlogo from "./assets/images/HUSD-logo.png"
import MDXlogo from "./assets/images/MDX-logo.png"
import BAGSlogo from "./assets/images/MDX-logo.png"
import HBCHlogo from "./assets/images/HBCH-logo.png"
import HFILlogo from "./assets/images/HFIL-logo.png"
import HLTClogo from "./assets/images/HLTC-logo.png"
import HDOTlogo from "./assets/images/HDOT-logo.png"
import BNBlogo from "./assets/images/BNB-logo.png"
import ADAlogo from "./assets/images/ADA-logo.png"
import ALPHAlogo from "./assets/images/ALPHA-logo.png"
import ATOMlogo from "./assets/images/ATOM-logo.png"
import AUTOlogo from "./assets/images/AUTO-logo.png"
import BANDlogo from "./assets/images/BAND-logo.png"
import BCHlogo from "./assets/images/BCH-logo.png"
// import BTCBlogo from "./assets/images/BTCB-logo.png"
import CAKElogo from "./assets/images/CAKE-logo.png"
import CREAMlogo from "./assets/images/CREAM-logo.png"
import DFlogo from "./assets/images/DF-logo.png"
import DOTlogo from "./assets/images/DOT-logo.png"
import EOSlogo from "./assets/images/EOS-logo.png"
import FILlogo from "./assets/images/FIL-logo.png"
import LINAlogo from "./assets/images/LINA-logo.png"
import LTClogo from "./assets/images/LTC-logo.png"
import PAXGlogo from "./assets/images/PAXG-logo.png"
import RAMPlogo from "./assets/images/RAMP-logo.png"
import SXPlogo from "./assets/images/SXP-logo.png"
import TWTlogo from "./assets/images/TWT-logo.png"
import VAIlogo from "./assets/images/VAI-logo.png"
import BZRXlogo from "./assets/images/BZRX-logo.png"
import XRPlogo from "./assets/images/XRP-logo.png"
import XTZlogo from "./assets/images/XTZ-logo.png"
import XVSlogo from "./assets/images/XVS-logo.png"
import YFIIlogo from "./assets/images/YFII-logo.png"
import REPlogo from "./assets/images/REP-logo.png"
import BATlogo from "./assets/images/BAT-logo.png"
import ZRXlogo from "./assets/images/ZRX-logo.png"
import KNClogo from "./assets/images/KNC-logo.png"
import MANAlogo from "./assets/images/MANA-logo.png"
import OPTlogo from "./assets/images/OPT-logo.png"
import ONElogo from "./assets/images/ONE-logo.svg"
import IOTXlogo from "./assets/images/IOTX-logo.svg"
import MIMlogo from "./assets/images/MIM-logo.svg"
import FRAXlogo from "./assets/images/FRAX-logo.svg"
import SPELLlogo from "./assets/images/SPELL-logo.svg"
import DODOlogo from "./assets/images/DODO-logo.svg"
import FTMlogo from "./assets/images/FTM-logo.svg"
import BTClogo from "./assets/images/BTC-logo.svg"
import MOVRlogo from "./assets/images/MOVR-logo.png"
import USTlogo from "./assets/images/UST-logo.png"
import RENBTClogo from "./assets/images/RENBTC-logo.png"
import GNOlogo from "./assets/images/GNO-logo.png"
import GNOSISlogo from "./assets/images/GNOSIS-logo.png"
import XDailogo from "./assets/images/XDai-logo.svg"
import HNDlogo from "./assets/images/HUNDRED-logo.png"
import veDAO from "./assets/images/veDAO-logo.png"
import Arbitrum from "./assets/images/ARBITRUM-logo.svg"
import AVAXLogo from "./assets/images/AVAX-logo.svg"
import POLYGONlogo from "./assets/images/POLYGON-logo.svg"
import agEURlogo from "./assets/images/agEUR-logo.svg"

type Logo = {
    [key: string] : string
}

const Logos: Logo ={
    "ETH"       : ETHlogo,
    "AETH"      : ETHlogo,
    "WETH"      : ETHlogo,
    "MATIC"     : MATIClogo,
    "AAVE"      : AAVElogo,
    "DAI"       : DAIlogo,
    "LINK"      : LINKlogo,
    "USDC"      : USDClogo,
    "USDT"      : USDTlogo,
    "WBTC"      : WBTClogo,
    "BUSD"      : BUSDlogo,
    "COMP"      : COMPlogo,
    "LRC"       : LRClogo,
    "SNX"       : SNXlogo,
    "TUSD"      : TUSDlogo,
    "UNI"       : UNIlogo,
    "YFI"       : YFIlogo,
    "sUSD"      : SUSDlogo,
    "SUSD"      : SUSDlogo,
    "XDAI"      : XDailogo,
    "SUSHI"     : SUSHIlogo,
    "BAL"       : BALlogo,
    "CRV"       : CRVlogo,
    "MKR"       : MKRlogo,
    "HT"        : HHTlogo,
    "HUSD"      : HUSDlogo,
    "MDX"       : MDXlogo,
    "BAGS"      : BAGSlogo,
    "HBCH"      : HBCHlogo,
    "HFIL"      : HFILlogo,
    "HLTC"      : HLTClogo,
    "HDOT"      : HDOTlogo,
    "BNB"       : BNBlogo,
    "ADA"       : ADAlogo,
    "ALPHA"     : ALPHAlogo,
    "ATOM"      : ATOMlogo,
    "AUTO"      : AUTOlogo,
    "BAND"      : BANDlogo,
    "BCH"       : BCHlogo,
    "BTCB"      : BTClogo,
    "Cake"      : CAKElogo,
    "CREAM"     : CREAMlogo,
    "DF"        : DFlogo,
    "DOT"       : DOTlogo,
    "EOS"       : EOSlogo,
    "FIL"       : FILlogo,
    "LINA"      : LINAlogo,
    "LTC"       : LTClogo,
    "PAXG"      : PAXGlogo,
    "RAMP"      : RAMPlogo,
    "SXP"       : SXPlogo,
    "TWT"       : TWTlogo,
    "VAI"       : VAIlogo,
    "BZRX"      : BZRXlogo,
    "XRP"       : XRPlogo,
    "XTZ"       : XTZlogo,
    "XVS"       : XVSlogo,
    "YFII"      : YFIIlogo,
    "REP"       : REPlogo,
    "BAT"       : BATlogo,
    "ZRX"       : ZRXlogo,
    "KNC"       : KNClogo,
    "MANA"      : MANAlogo,
    "OPT"       : OPTlogo,
    "ONE"       : ONElogo,
    "tUSDC"     : USDClogo,
    "IOTX"      : IOTXlogo,
    "IOTX-T"    : IOTXlogo,
    "MIM"       : MIMlogo,
    "FRAX"      : FRAXlogo,
    "SPELL"     : SPELLlogo,
    "DODO"      : DODOlogo,
    "FTM"       : FTMlogo,
    "fUSDT"     : USDTlogo,
    "BTC"       : BTClogo,
    "ioETH"     : ETHlogo,
    "ioUSDT"    : USDTlogo,
    "ioWBTC"    : WBTClogo,
    "ioBUSD"    : BUSDlogo,
    "ioUSDC"    : USDClogo,
    "MOVR"      : MOVRlogo,
    "BNB.bsc"   : BNBlogo,
    "1ETH"      : ETHlogo,
    "1USDC"     : USDClogo,
    "1USDT"     : USDTlogo,
    "1WBTC"     : WBTClogo,
    "UST"       : USTlogo,
    "WBTC.eth"  : WBTClogo,
    "renBTC"    : RENBTClogo,
    "GNO"       : GNOlogo,
    "GNOSIS"    : GNOSISlogo,
    "HND"       : HNDlogo,
    "veDAO"     : veDAO,
    "WeVE"      : veDAO,
    "Arbitrum"  : Arbitrum,
    "AVAX"      : AVAXLogo,
    "USDT.e"    : USDTlogo,
    "ioDAI"     : DAIlogo,
    "Polygon"   : POLYGONlogo,
    "hxDAI"     : DAIlogo,
    "xDAI"      : DAIlogo,
    "agEUR"     : agEURlogo
}

export default Logos
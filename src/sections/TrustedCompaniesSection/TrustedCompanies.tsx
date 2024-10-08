import { ClassValue } from 'clsx';

import evacodes from '@/assets/images/evacodes.png';
import bloxxa from '@/assets/images/bloxxa.png';
import google from '@/assets/images/google.png';
import gexabyte from '@/assets/images/gexabyte.png';
import medium from '@/assets/images/medium.png';
import suave from '@/assets/images/suave.png';
import swapAcross from '@/assets/images/swapacross.png';
import waitlist from '@/assets/images/waitlist.png';
import convoSpace from '@/assets/images/convo-space.png';
import keplr from '@/assets/images/keplr.png';
import pingPub from '@/assets/images/ping-pub.svg';
import kleomedes from '@/assets/images/kleomedes.png';
import gempad from '@/assets/images/gempad.png';
import nodesHub from '@/assets/images/nodeshub.png';
import interchainInfo from '@/assets/images/interchaininfo.png';
import buidl from '@/assets/images/buidl.png';
import nodeXEmperor from '@/assets/images/nodexemperor.png';
import polkachu from '@/assets/images/polkachu.png';
import bueno from '@/assets/images/bueno.png';
import pfc from '@/assets/images/pfc.png';
import fairStaking from '@/assets/images/fair-staking.png';
import dasamuka from '@/assets/images/dasamuka.png';
import dwentz from '@/assets/images/dwentz.png';
import indonode from '@/assets/images/indonode.png';
import citizenWeb3 from '@/assets/images/citizen-web3.jpg';
import dashNode from '@/assets/images/dashnode.png';
import nomad from '@/assets/images/nomad.png';
import konsortech from '@/assets/images/konsortech.png';
import sychonix from '@/assets/images/sychonix.png';
import syanodes from '@/assets/images/syanodes.png';
import jhonswg from '@/assets/images/jhonswg.png';
import cryptonodeid from '@/assets/images/cryptonodeid.png';
import nodestake from '@/assets/images/nodestake.png';
import iAmAtomic from '@/assets/images/i-am-atomic.png';
import xxcode from '@/assets/images/xxcode.png';
import revonode from '@/assets/images/revonode.png';
import ravenode from '@/assets/images/ravenode.jpg';
import vinjanInc from '@/assets/images/vinjan-inc.png';
import busurnode from '@/assets/images/busurnode.png';
import croutondigital from '@/assets/images/croutondigital.png';
import dnsarz from '@/assets/images/dnsarz.png';
import communitynode from '@/assets/images/communitynode.png';
import winnode from '@/assets/images/winnode.png';
import coinCodex from '@/assets/images/coincodex.png';
import gowtherNdoe from '@/assets/images/gowthernode.png';
import danggia from '@/assets/images/DANGGIA.png';
import dragonvn from '@/assets/images/dragonvn.png';
import leapWallet from '@/assets/images/leap-wallet.png';
import zonkoekLogo from '@/assets/images/zonkoek.png';
import cogwheelLogo from '@/assets/images/cogwheel.png';
import x1node from '@/assets/images/x1node.png';
import shazoe from '@/assets/images/shazoe.jpg';
import shamura from '@/assets/images/shamura.png';

type Company = {
  id: number;
  name: string;
  src: string;
  logoClass?: ClassValue;
};

export const COMPANIES: Company[] = [
  {
    id: 1,
    name: 'EvaCodes',
    src: evacodes,
  },
  {
    id: 2,
    name: 'Bloxxa',
    src: bloxxa,
    logoClass: 'max-h-8',
  },
  {
    id: 3,
    name: 'Google',
    src: google,
    logoClass: 'max-h-9',
  },
  {
    id: 4,
    name: 'Gexabyte',
    src: gexabyte,
    logoClass: 'max-h-10',
  },
  {
    id: 5,
    name: 'Medium',
    src: medium,
    logoClass: 'max-h-7',
  },
  {
    id: 6,
    name: 'Suave',
    src: suave,
    logoClass: 'max-h-8',
  },
  {
    id: 7,
    name: 'SwapAcross',
    src: swapAcross,
    logoClass: 'max-h-9',
  },
  {
    id: 8,
    name: 'Waitlist',
    src: waitlist,
    logoClass: 'max-h-8',
  },
  {
    id: 9,
    name: 'Convo Space',
    src: convoSpace,
    logoClass: 'max-h-10',
  },
  {
    id: 10,
    name: 'Keplr',
    src: keplr,
    logoClass: 'max-h-10',
  },
  {
    id: 11,
    name: 'Kleomedes',
    src: kleomedes,
    logoClass: 'max-h-10',
  },
  {
    id: 12,
    name: 'GemPad',
    src: pingPub,
    logoClass: 'max-h-10',
  },
  {
    id: 13,
    name: 'NodesHub',
    src: gempad,
    logoClass: 'max-h-10',
  },
  {
    id: 14,
    name: 'Nodes Hub',
    src: nodesHub,
    logoClass: 'max-h-10',
  },
  {
    id: 15,
    name: 'Interchain Info',
    src: interchainInfo,
    logoClass: 'max-h-10',
  },
  {
    id: 16,
    name: 'Buidl',
    src: buidl,
    logoClass: 'max-h-9',
  },
  {
    id: 17,
    name: 'NodeX Emperor',
    src: nodeXEmperor,
    logoClass: 'max-h-10',
  },
  {
    id: 18,
    name: 'Polkachu',
    src: polkachu,
    logoClass: 'max-h-10',
  },
  {
    id: 19,
    name: 'Bueno',
    src: bueno,
    logoClass: 'max-h-10',
  },
  {
    id: 20,
    name: 'PFC',
    src: pfc,
    logoClass: 'max-h-10',
  },
  {
    id: 21,
    name: 'Fair Staking',
    src: fairStaking,
    logoClass: 'max-h-9',
  },
  {
    id: 22,
    name: 'Dasamuka',
    src: dasamuka,
    logoClass: 'max-h-10',
  },
  {
    id: 23,
    name: 'Dwentz',
    src: dwentz,
    logoClass: 'max-h-9',
  },
  {
    id: 24,
    name: 'Indonode',
    src: indonode,
    logoClass: 'max-h-10',
  },
  {
    id: 25,
    name: 'Citizen Web3',
    src: citizenWeb3,
    logoClass: 'max-h-10',
  },
  {
    id: 26,
    name: 'DashNode',
    src: dashNode,
    logoClass: 'max-h-10',
  },
  {
    id: 27,
    name: 'Nomad',
    src: nomad,
    logoClass: 'max-h-10',
  },
  {
    id: 28,
    name: 'KonsorTech',
    src: konsortech,
    logoClass: 'max-h-10',
  },
  {
    id: 29,
    name: 'Sychonix',
    src: sychonix,
    logoClass: 'max-h-10',
  },
  {
    id: 30,
    name: 'SyaNodes',
    src: syanodes,
    logoClass: 'max-h-10',
  },
  {
    id: 31,
    name: 'Jhonswg',
    src: jhonswg,
    logoClass: 'max-h-10',
  },
  {
    id: 32,
    name: 'CryptonodeID',
    src: cryptonodeid,
    logoClass: 'max-h-10',
  },
  {
    id: 33,
    name: 'NodeStake',
    src: nodestake,
    logoClass: 'max-h-10',
  },
  {
    id: 34,
    name: 'IAmAtomic',
    src: iAmAtomic,
    logoClass: 'max-h-10',
  },
  {
    id: 35,
    name: 'xxcode',
    src: xxcode,
    logoClass: 'max-h-10',
  },
  {
    id: 36,
    name: 'revonode',
    src: revonode,
    logoClass: 'max-h-10',
  },
  {
    id: 37,
    name: 'Ravenode',
    src: ravenode,
    logoClass: 'max-h-10',
  },
  {
    id: 38,
    name: 'Vinjan.Inc',
    src: vinjanInc,
    logoClass: 'max-h-10',
  },
  {
    id: 39,
    name: 'Busurnode',
    src: busurnode,
    logoClass: 'max-h-10',
  },
  {
    id: 40,
    name: 'CroutonDigital',
    src: croutondigital,
    logoClass: 'max-h-10',
  },
  {
    id: 41,
    name: 'Dnsarz',
    src: dnsarz,
    logoClass: 'max-h-10',
  },
  {
    id: 42,
    name: 'CommunityNode',
    src: communitynode,
    logoClass: 'max-h-10',
  },
  {
    id: 43,
    name: 'Winnode',
    src: winnode,
    logoClass: 'max-h-9',
  },
  {
    id: 44,
    name: 'Winnode',
    src: coinCodex,
    logoClass: 'max-h-9',
  },
  {
    id: 45,
    name: 'GowtherNode',
    src: gowtherNdoe,
    logoClass: 'max-h-9',
  },
  {
    id: 46,
    name: 'KenZ|DragonVN',
    src: dragonvn,
    logoClass: 'max-h-9',
  },
  {
    id: 47,
    name: 'LeapWallet',
    src: leapWallet,
    logoClass: 'max-h-10',
  },
  {
    id: 48,
    name: 'DANGGIA',
    src: danggia,
    logoClass: 'max-h-10',
  },
  {
    id: 49,
    name: 'ZONKOEK',
    src: zonkoekLogo,
    logoClass: 'max-h-10',
  },
  {
    id: 50,
    name: 'Cogwheel ⚙️',
    src: cogwheelLogo,
    logoClass: 'max-h-8',
  },
  {
    id: 51,
    name: 'X1NODE',
    src: x1node,
    logoClass: 'max-h-10',
  },
  {
    id: 52,
    name: 'SHAZOE',
    src: shazoe,
    logoClass: 'max-h-10',
  },
    {
    id: 52,
    name: 'SHAMURA',
    src: shamura,
    logoClass: 'max-h-10',
  },
];

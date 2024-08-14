const EXPLORER_ROOT = '/explorer';
const DOCUMENTATION_ROOT = '/documentation';
const ABOUT_EXTENSION = '/about';
const USER_EXTENSION = '/users';
const DEVELOPER_EXTENSION = '/developers';
const STARTUP_EXTENSION = '/startups';

export const ROUTES = {
  HOME: '/',
  WHITEPAPER: '/whitepaper',
  EXPLORER: {
    ROOT: EXPLORER_ROOT,
    ACCOUNT: `${EXPLORER_ROOT}/account`,
    TOKENS: `${EXPLORER_ROOT}/tokens`,
    BLOCKS: `${EXPLORER_ROOT}/blocks`,
    TRANSACTIONS: `${EXPLORER_ROOT}/transactions`,
    SIGN_IN: `${EXPLORER_ROOT}/sign-in`,
    SIGN_UP: `${EXPLORER_ROOT}/sign-up`,
    PASSWORD_RECOVERY: `${EXPLORER_ROOT}/password-recovery`,
  },
  DOCUMENTATION: {
    ROOT: DOCUMENTATION_ROOT,
    ABOUT: {
      ROOT: `${DOCUMENTATION_ROOT}${ABOUT_EXTENSION}`,
      WHY_DECENTRALIZED_RWAS: `${DOCUMENTATION_ROOT}${ABOUT_EXTENSION}/why-decentralized-rwas`,
      THE_STABLECOIN_TRILEMMA: `${DOCUMENTATION_ROOT}${ABOUT_EXTENSION}/the-stablecoin-trilemma`,
      THE_SYMPHONY_APPROACH: `${DOCUMENTATION_ROOT}${ABOUT_EXTENSION}/approach`,
      SYMPHONY_IMPACT: `${DOCUMENTATION_ROOT}${ABOUT_EXTENSION}/impact`,
      SIZE_OF_OPPORTUNITY: `${DOCUMENTATION_ROOT}${ABOUT_EXTENSION}/size-of-opportunity`,
      TOKENOMICS: `${DOCUMENTATION_ROOT}${ABOUT_EXTENSION}/tokenomics`,
      ROADMAP: `${DOCUMENTATION_ROOT}${ABOUT_EXTENSION}/roadmap`,
    },
    USERS: {
      ROOT: `${DOCUMENTATION_ROOT}${USER_EXTENSION}`,
      CREATE_WALLET: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/create-wallet`,
      ADD_SYMPHONY_TO_WALLET: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/add-symphony-to-wallet`,
      USING_IBC: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/using-ibc`,
      INCENTIVIZED_TESTNET: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/incentivized-testnet`,
      QUALIFYING_USERS: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/qualifying-users`,
      SOUNDWAVE_NFT: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/soundwave-nft`,
    },
    DEVELOPERS: {
      ROOT: `${DOCUMENTATION_ROOT}${DEVELOPER_EXTENSION}`,
      EXPLORERS: `${DOCUMENTATION_ROOT}${DEVELOPER_EXTENSION}/explorers`,
      VALIDATORS: `${DOCUMENTATION_ROOT}${DEVELOPER_EXTENSION}/validators`,
      GENESIS_DELEGATION: `${DOCUMENTATION_ROOT}${DEVELOPER_EXTENSION}/genesis-delegation`,
    },
    STARTUPS: {
      ROOT: `${DOCUMENTATION_ROOT}${STARTUP_EXTENSION}`,
      INCEPTION: `${DOCUMENTATION_ROOT}${STARTUP_EXTENSION}/inception`,
      DEVELOPMENT: `${DOCUMENTATION_ROOT}${STARTUP_EXTENSION}/development`,
      EXPANSION: `${DOCUMENTATION_ROOT}${STARTUP_EXTENSION}/expansion`,
      STABILIZATION: `${DOCUMENTATION_ROOT}${STARTUP_EXTENSION}/stabilization`,
      ADVISORS: `${DOCUMENTATION_ROOT}${STARTUP_EXTENSION}/advisors`,
      FUNDRAISING: `${DOCUMENTATION_ROOT}${STARTUP_EXTENSION}/fundraising`,
      CASE_STUDIES: `${DOCUMENTATION_ROOT}${STARTUP_EXTENSION}/case-studies`,
    },
  },
};

const KYC_STATUS = {
    successful: 'successful',
    rejected: 'rejected',
    expired: 'expired',
    pending: 'pending',
    esign_required: 'esign_required',
    submitted: 'submitted',
    approved: 'approved'
};

const GOLD_USER = {

    /*
     *  UserId:'safi007',
     * userId: 'raman0007'
     * userId: 'kamboj0007'
     */
    userId: 'Yuyu02412'
    // UserId: 'safi45777'
};

const INVESTOR_API = {
    ADD_INVESTOR: 'mutualfund/investor',
    INVESTOR_ADDRESS: 'mutualfund/investor/address',
    NOMINEE: 'mutualfund/investor/nominee',
    ADD_BANK: 'mutualfund/bank',
    BANK: 'mutualfund/investor/bank',
    VIDEO: 'mutualfund/kyc/video',
    ESIGN: 'mutualfund/esign'
};

const FINTECH_API = {
    KYC_REQUESTS: 'v2/kyc_requests',
    CHECK_PINCODE: 'api/onb/pincodes',
    CHECK_IFSC: 'api/onb/ifsc_codes',
    UPLOAD_FILES: 'files',
    ONB_INVESTOR: 'api/onb/investors',
    INVEST_ACCOUNT: 'v2/mf_investment_accounts'
};

export {
    KYC_STATUS,
    GOLD_USER,
    INVESTOR_API,
    FINTECH_API
};

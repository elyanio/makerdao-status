import { useMemo } from 'react';
import {
  getCollateralsAddresses,
  getCollateralsKeys,
  getTokeNameFromIlkName,
} from '../addresses/addressesUtils';
import changelog from '../addresses/changelog.json';
import useLoadCalcContract from './useLoadCalcContract';
import useLoadClipperContract from './useLoadClipperContract';
import useLoadClipperMomContract from './useLoadClipperMomContract';
import useLoadDogContract from './useLoadDogContract';
import useLoadDssAutoLineContract from './useLoadDssAutoLineContract';
import useLoadDssPsmContract from './useLoadDssPsmContract';
import useLoadDSValueContract from './useLoadDSValueContract';
import useLoadERC20Contract from './useLoadERC20Contract';
import useLoadFlapContract from './useLoadFlapContract';
import useLoadJugContract from './useLoadJugContract';
import useLoadRwaLiquidationOracleContract from './useLoadRwaLiquidationOracleContract';
import useLoadSpotContract from './useLoadSpotContract';
import useLoadVatContract from './useLoadVatContract';

const useLoadCollaterals = () => {
  const { vatMap, loading: vatLoading } = useLoadVatContract();
  const { jugMap, loading: jugLoading } = useLoadJugContract();
  const { spotMap, loading: spotLoading } = useLoadSpotContract();
  const { dSValueMap, loading: dSValueLoading } = useLoadDSValueContract();
  const { dssAutoLineMap, loading: dssAutoLineLoading } =
    useLoadDssAutoLineContract();
  const { clipperMap, loading: clipperLoading } = useLoadClipperContract();
  const { clipperMomMap, loading: clipperMomLoading } =
    useLoadClipperMomContract();
  const { dogMap, loading: dogLoading } = useLoadDogContract();
  const { dssPsmMap, loading: dssPsmLoading } = useLoadDssPsmContract();
  const { calcMap, loading: calcLoading } = useLoadCalcContract();
  const { erc20Map, loading: erc20Loading } = useLoadERC20Contract({
    spotMap,
    vatMap,
    dSValueMap,
    enable: !vatLoading && !spotLoading && !dSValueLoading,
  });
  const { rwaLiqOracleMap, loading: loadingRwaLiqOracle } =
    useLoadRwaLiquidationOracleContract();
  useLoadFlapContract();
  const addresses = useMemo(() => getCollateralsAddresses(changelog), []);
  const collaterals: Definitions.Collateral[] = useMemo(() => {
    const allIlks = getCollateralsKeys(changelog);
    return allIlks.map((ilk: string) => {
      let ilkTokenName = getTokeNameFromIlkName(ilk).replace('PSM-', '');
      ilkTokenName = ilkTokenName === 'PAXUSD_A' ? 'USDP' : ilkTokenName;
      ilkTokenName = ilkTokenName === 'PSM_PAX_A' ? 'PSM_USDP' : ilkTokenName;

      let asset = ilk === 'PAXUSD-A' ? 'USDP' : ilk;
      asset = asset === 'PSM-PAX-A' ? 'PSM-USDP' : asset;

      return {
        id: `ilk-${ilk}`,
        asset,
        address: addresses.get(ilk),
        token: ilkTokenName,
        vat_line: vatMap.get(`${ilk}--line`),
        vat_dust: vatMap.get(`${ilk}--dust`),
        jug_duty: jugMap.get(`${ilk}--duty`),
        spot_mat: spotMap.get(`${ilk}--mat`),
        dss_auto_line_line: dssAutoLineMap.get(`${ilk}--line`),
        dss_auto_line_gap: dssAutoLineMap.get(`${ilk}--gap`),
        dss_auto_line_ttl: dssAutoLineMap.get(`${ilk}--ttl`),
        clip_calc: clipperMap.get(`${ilk}--calc`),
        clip_cusp: clipperMap.get(`${ilk}--cusp`),
        clip_tail: clipperMap.get(`${ilk}--tail`),
        clip_chip: clipperMap.get(`${ilk}--chip`),
        clip_tip: clipperMap.get(`${ilk}--tip`),
        clip_buf: clipperMap.get(`${ilk}--buf`),
        clipMom_tolerance: clipperMomMap.get(`${ilk}--tolerance`),
        dog_chop: dogMap.get(`${ilk}--chop`),
        dog_hole: dogMap.get(`${ilk}--hole`),
        dss_pms_tin: dssPsmMap.get(`${ilk}--tin`),
        dss_pms_tout: dssPsmMap.get(`${ilk}--tout`),
        calc_cut: calcMap.get(`${ilk}--cut`),
        calc_step: calcMap.get(`${ilk}--step`),
        doc: rwaLiqOracleMap.get(`${ilk}--doc`),
        locked: erc20Map.get(`locked--${ilk}`),
        lockedBN: erc20Map.get(`lockedBN--${ilk}`),
      };
    });
  }, [
    addresses,
    vatMap,
    jugMap,
    spotMap,
    dssAutoLineMap,
    clipperMap,
    clipperMomMap,
    dogMap,
    dssPsmMap,
    calcMap,
    rwaLiqOracleMap,
    erc20Map,
  ]);
  return {
    collaterals,
    loading:
      vatLoading ||
      spotLoading ||
      jugLoading ||
      dssAutoLineLoading ||
      clipperLoading ||
      clipperMomLoading ||
      dogLoading ||
      dssPsmLoading ||
      calcLoading ||
      erc20Loading ||
      loadingRwaLiqOracle,
  };
};

export default useLoadCollaterals;

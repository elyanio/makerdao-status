import { ethers } from 'ethers';
import { useMemo } from 'react';
import { getCollateralsKeys } from '../addresses/addressesUtils';
import changelog from '../addresses/changelog.json';
import { useEthCall } from './useEthCall';

const { formatBytes32String } = ethers.utils;

const useLoadRwaLiquidationOracleContract = (ilksKeys?: string[]) => {
  const defaultIlks = useMemo(
    () => ilksKeys || getCollateralsKeys(changelog),
    [ilksKeys],
  );
  const contractsParams = useMemo(
    () => getContractsParams(defaultIlks),
    [defaultIlks],
  );
  const { dataMap: ethCallMap, loading, error } = useEthCall(contractsParams);
  const rwaLiqOracleMap = useMemo(() => {
    const newMap = new Map();
    defaultIlks?.forEach((ilk) => {
      const values = ethCallMap.get(`${ilk}--ilks`);
      newMap.set(`${ilk}--doc`, values?.doc || undefined);
    });
    return newMap;
  }, [defaultIlks, ethCallMap]);
  return { rwaLiqOracleMap, loading, error };
};

const getContractsParams = (ilks: string[]) =>
  ilks.map((ilk) => {
    const ilkBytes = formatBytes32String(ilk);
    return {
      id: ilk,
      address: changelog.MIP21_LIQUIDATION_ORACLE,
      abi: 'RwaLiquidationOracle',
      params: [{ name: 'ilks', inputs: ilkBytes }],
    };
  });

export default useLoadRwaLiquidationOracleContract;

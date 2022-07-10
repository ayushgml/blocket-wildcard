const DemoIDN = artifacts.require( "DemoIDN" );
const MediTrack = artifacts.require( "MediTrack" );
const PrimaryCare = artifacts.require( "PrimaryCare" );
const RecordInterface = artifacts.require( "RecordInterface" );

module.exports = function (deployer) {
  deployer.deploy( DemoIDN, "Ayush");
  deployer.deploy( MediTrack, "Alok", "0xbD8a5C4f1ba3072b6e88e28529f8b78adfCeaa60", "0xf096720f1aEE724D1fC1072FF08A2DA3d8540B89" );
  deployer.deploy( PrimaryCare, "Suhasini" );
  deployer.deploy( RecordInterface );
};

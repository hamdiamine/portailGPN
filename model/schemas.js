ClientsSchema = new SimpleSchema({
  id:{type:Number},
  reference:{type:String},
  mdp:{type:String},
  solde:{type:Number},
  name:{type:String},
  adress:{type:String},
  type:{type:String},
  telPers:{type:String},
  telPro:{type:String},
  telMob:{type:String},
  fax:{type:String},
  web:{type:String},
  mail:{type:String},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

EngagementsSchema = new SimpleSchema({
  idAbn:{type:Number},
  name:{type:String},
  valeur:{type:{String}},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

AbonnementsSchema = new SimpleSchema({
  id:{type:Number},
  idPdl:{type:Number},
  reference:{type:String},
  soldeAbn:{type:Number},
  nameAbonne:{type:String},
  namePayeur:{type:String},
  dateDebut:{type:Date},
  dateFin:{type:Date},
  groupeFact:{type:String},
  offreType:{type:String},
  dateDerFact:{type:Date},
  dateProchFact:{type:Date},
  ModPaie:{type:String},
  etapRelance:{type:String},
  listEng:{type:[EngagementsSchema]},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

LigneComptesSchema = new SimpleSchema({
  idCompte:{type:Number},
  idClient:{type:Number},
  idFacture:{type:Number},
  date:{type:Date},
  reference:{type:String},
  type:{type:String},
  debit:{type:Number},
  credit:{type:Number},
  cumul:{type:Number},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

ComptesSchema = new SimpleSchema({
  id:{type:Number},
  idClient:{type:Number},
  idAbn:{type:Number},
  refAbn:{type:String},
  solde:{type:Number},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

LignesFacturesSchema = new SimpleSchema({
  idFacture:{type:Number},
  numero:{type:Number},
  article:{type:String},
  qteFact:{type:Number},
  prixUnt:{type:Number},
  mntHT:{type:Number},
  mntTVA:{type:Number},
  mntTTC:{type:Number},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

FacturesSchema = new SimpleSchema({
  id:{type:Number},
  idPayeur:{type:Number},
  idAbn:{type:Number},
  reference:{type:String},
  type:{type:String},
  namePayeur:{type:String},
  adressPai:{type:String},
  dateCalc:{type:Date},
  dateOff:{type:Date},
  dateExig:{type:Date},
  mntHT:{type:Number},
  mntTVA:{type:Number},
  mntTTC:{type:Number},
  mntRST:{type:Number},
  lignes:{type:[LignesFacturesSchema]},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

HistoContactPdlsSchema = new SimpleSchema({
  idPdl:{type:Number},
  name:{type:String},
  role:{type:String},
  datedebut:{type:Date},
  datefin:{type:Date},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

HistoEquipementsSchema = new SimpleSchema({
  idPdl:{type:Number},
  type:{type:String},
  numero:{type:String},
  datepose:{type:Date},
  raispose:{type:String},
  agepose:{type:String},
  datedepose:{type:Date},
  raisdepose:{type:String},
  agedepose:{type:String},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

HistoProfilFactSchema = new SimpleSchema({
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

HistoReclamationsSchema = new SimpleSchema({
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

HistoRoleClientsSchema = new SimpleSchema({
  idClient:{type:Number},
  idPdl:{type:Number},
  refPdl:{type:String},
  adressPdl:{type:String},
  prop:{type:String},
  abonne:{type:String},
  payeur:{type:String},
  autres:{type:String},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

NotificationsSchema = new SimpleSchema({
  idClient:{type:Number},
  message:{type:String},
  date:{type:Date},
  doc:{type:String},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

SecteursSchema = new SimpleSchema({
  idPdl:{type:Number},
  type:{type:Number},
  valeur:{type:Number},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

PointsDeComptagesSchema = new SimpleSchema({
  id:{type:Number},
  reference:{type:String},
  etat:{type:String},
  compteur:{type:String},
  etatCpt:{type:String},
  tournee:{type:String},
  ordre:{type:Number},
  diffReleve:{type:String},
  dateProchReleve:{type:Date},
  listSecteur:{type:[SecteursSchema]},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

RelevesSchema = new SimpleSchema({
  idPdl:{type:Number},
  idFacture:{type:Number},
  date:{type:Date},
  nbreJours:{type:Number},
  ancienIdx:{type:Number},
  nvlIdx:{type:Number},
  conso:{type:Number},
  correction:{type:Number},
  anomalie:{type:String},
  facture:{type:String},
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

TypesPrestationsSchema = new SimpleSchema({
  createdAt:{type:Date, autoValue:function(){return new Date()}}
});

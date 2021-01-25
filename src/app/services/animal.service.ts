import { Injectable } from '@angular/core';

export interface Animal {
  id?: string;
  nombre: string;
  nombreC: string;
  tipo: string;
  imagen: Array<imag>;
  coments: comments;
  locate: locate;
}
// tslint:disable-next-line: class-name
interface imag {
  id: string;
  link: string;
}

// tslint:disable-next-line: class-name
interface comments {
  descripcion: string;
  habitos: string;
  reproducion: string;
  alimentacion: string;
  habitad: string;
}

interface locate {
  lat: string;
  lng: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animal: Array<Animal>;
  private imaga: Array<imag>;

  constructor() {
    this.imaga = [
      {
        id: '0',
        link: 'assets/img/DSC05863.JPG'
      }, {
        id: '0',
        link: 'assets/img/DSC08060.JPG'
      }, {
        id: '0',
        link: 'assets/img/DSC08038.JPG'
      }, {
        id: '0',
        link: 'assets/img/DSC05858.JPG'
      }, {
        id: '0',
        link: 'assets/img/DSC07528.JPG'
      }
    ];

    this.animal = [
      {
        id: 'yCtiJTPYdj',
        nombre: 'puma',
        nombreC: 'puma Concolor',
        tipo: 'felino',
        imagen: this.imaga,
        coments: {
          descripcion: 'pelo cortoLos machos adultos miden entre 1.5 y 2.75 metros de largo, abarcando desde la punta de la cola hasta la nariz. Pueden pesar de 53 a 100 kilos. Lo más grandes han pesado más de 120 kg. Las hembras suelen ser de menor tamaño y peso variando entre 29 y 64 kilos. Su pelaje por lo general es dorado, pero puede tener variaciones en gris o tonos rojizos. Son carnívoros se alimentan de vertebrados grandes y medianos, particularmente venados. De hábitos diurnos y nocturnos, es solitario',
          habitos: 'Diurnos y nocturnos, es solitario',
          reproducion: 'Reproducción 繁殖 Un puma no se aparea hasta que no haya encontrado un territorio apto y cómodo para hacerlo. La hembra en celo emite sonidos que son respondidos por el macho de la misma manera al mismo tiempo que huele el área genital de esta. En una hora pueden copular hasta nueve veces, aunque este acto dure sólo menos de un minuto. Las hembras son maduras sexualmente entre el año y medio y los tres años. Los machos lo son a los tres años. El período de gestación dura aproximadamente 91 días y comúnmente preñan cada dos a tres años. Hay casos de monogamia en las hembras pero mayormente se relacionan con diferentes parejas. Las camadas van de uno a seis cachorros, pero por lo regular se dan de tres a cuatro. Su peso al nacer varía de 226 a 453 gramos y lo hacen con los ojos cerrados que después de diez días logran abrir. Después de 40 días son destetados y permanecen junto a la madre los próximos 15 meses como mínimo.',
          alimentacion: 'Son carnívoros se alimentan de vertebrados grandes y medianos, particularmente venados.',
          habitad: 'El puma tiene una gran distribución geográfica, habitando desde Canadá hasta los Andes de América del Sur. Su hábitat incluye bosques de coníferas, bosques tropicales, praderas, pantanos y ambientes con abundante vegetación.'
        },
        locate: { lat: '-21.707374', lng: '-64.614683' }
      },
      {
        id: 'kwcbqmpmtx',
        nombre: 'jaguar',
        nombreC: 'pantera onca',
        tipo: 'felino',
        imagen: [
          { id: '0', link: 'assets/img/DSC02.JPG' },
          { id: '0', link: 'assets/img/DSC05882.JPG' },
          { id: '0', link: 'assets/img/DSC07936.JPG' },
          { id: '0', link: 'assets/img/DSC07942.JPG' },
          { id: '0', link: 'assets/img/DSC07992.JPG' },
          { id: '0', link: 'assets/img/DSC07993.JPG' },
          { id: '0', link: 'assets/img/DSC07999.JPG' },
          { id: '0', link: 'assets/img/DSC07966.JPG' }
        ],
        coments: {
          descripcion: 'Los machos adultos miden entre 1.5 y 2.75 metros de largo, abarcando desde la punta de la cola hasta la nariz. Pueden pesar de 53 a 100 kilos. Lo más grandes han pesado más de 120 kg. Las hembras suelen ser de menor tamaño y peso variando entre 29 y 64 kilos. Su pelaje por lo general es dorado, pero puede tener variaciones en gris o tonos rojizos. Son carnívoros se alimentan de vertebrados grandes y medianos, particularmente venados. De hábitos diurnos y nocturnos, es solitario',
          habitos: 'Felino terrestre, solitario, de hábitos diurnos y nocturnos, que solo interactúa con otros individuos de la especie para cortejar y aparearse. Es un carnívoro oportunista, que puede capturar cualquier presa que encuentre. Es un animal territorial que utiliza marcas de raspado en los árboles, la orina y las heces para marcar su territorio',
          reproducion: 'Por medio de las vocalizaciones, los jaguares se comunican previamente a la copulación. Cuando la hembra está en celo, emite sonidos que son respondidos por los machos. Estos suelen competir para determinar al ganador. Después de la cópula, la hembra no tolera la presencia de los machos. Estas alcanzan la madurez sexual entre los 12 y 24 meses y el macho entre los 24 y 36 meses. 37 días es la duración del ciclo estral con 6 a 17 días de período de celo. Durante ese tiempo, las hembras transpiran un olor más fuerte que llama la atención de otros jaguares.Los nacimientos se dan comúnmente en estaciones húmedas, esto debido a la gran abundancia de presas. Nacen de uno a tres crías tras un período de gestación que va desde los 91 hasta los 111 días.',
          alimentacion: 'Estos carnívoros tienen en su dieta más de 85 especies para alimentarse.',
          habitad: 'Su distribución actual va desde el sur de Estados unidos hasta el norte de argentina. se desarrolla en una variedad de tipos de hábitat, que incluyen bosque espinoso y matorral xerófilo en el norte, y en el bosque mesófilo de montaña, selvas húmedas y secas en el resto de su distribución en el país.'
        },
        locate: { lat: '-21.537403', lng: '-64726527' }

      },
      {
        id: 'v6rMLKGC7i',
        nombre: 'paraba castana',
        nombreC: 'ara severus',
        tipo: 'ave',
        imagen: [
          { id: '0', link: 'assets/img/1582285631.jpg' },
          { id: '0', link: 'assets/img/DSC08262.JPG' },
          { id: '0', link: 'assets/img/DSC08266.JPG' },
        ],
        coments: {
          descripcion: 'ES CONSIDERADO UN GUACAMAYO PEQUEÑO: DE ADULTO MIDE ENTRE 40 Y 50 CM DE LONGITUD; LOS MACHOS PESAN ENTRE 350 Y 390 G Y LAS HEMBRAS DE 300 A 360 G.RNRNEN SU PLUMAJE PREDOMINA EL COLOR VERDE, EXCEPTO POR LA PARTE INFERIOR DE LAS ALAS, QUE ES ROJA, Y LA PARTE SUPERIOR DE LAS PRIMARIAS, QUE ES AZUL; LAS PLUMAS DE LA COLA TAMBIÉN SON ROJAS Y AZULES.',
          habitos: 'EN PAREJAS O BANDADAS PEQUEÑAS DE HASTA 10 AVES, PER PUEDE SER ENCONTRADA EN MAYOR NÚMERO EN DORMIDEROS. SE ALIMENTA EN EL DOSEL.',
          reproducion: '',
          alimentacion: '',
          habitad: ''
        },
        locate: { lat: '-21.540378', lng: '-64.720030' }
      },

      {
        id: 'T2WYFniqws',
        nombre: 'Ocelote',
        nombreC: 'Leopardus pardalis',
        tipo: 'Felidae',
        imagen: [
          { id: '0', link: 'assets/img/large.jpg' },
          { id: '0', link: 'assets/img/large1.jpg' },
          { id: '0', link: 'assets/img/leopardus-pardalis-ac.jpg' },
          { id: '0', link: 'assets/img/Ocelot.jpg' },
        ],
        coments: {
          descripcion: 'su tamaño es intermedio entre las especies grandes, como el jaguar o el puma, y las pequeñas, como el margay y el yaguarundi, con una altura de 40 a 50 cm y un peso de 11 a 16 kg.  En vida silvestre llega a vivir hasta diez años y, al igual que otros felinos so- litarios, las parejas sólo se reúnen para reproducirse.',
          habitos: 'como todos los felinos, es un depredador activo, es decir, busca, embosca y mata a sus presas, y oportunista, pues consume tanto organismos pequeños (ratones) como grandes (tepezcuintles y guaqueques, que pesan hasta 10 kg)',
          reproducion: 'Reproducción 	A partir de los dos años de edad, la hembra procrea una o dos crías que requieren de los cuidados ma- ternos hasta que son independientes, entre los 18 a 24 meses de edad. Los individuos jóvenes del ocelote, y de otros depredadores, llegan a morir por los ataques de individuos adultos  o de otros felinos grandes, como el jaguar. a este suceso se le conoce como “muerte por competencia”, en el que el principal objetivo es eliminar a un posible competidor. para evitar estos encuentros, los ocelotes dejan marcas de orina en los arbustos o árboles en los límites de su territorio como una señal de pertenencia y de su presencia en el área.1,2 Estas marcas también sirven para comunicarse entre ellos, e indican cuándo las hembras están listas para reproducirse.',
          alimentacion: 'Se alimenta de otras especies como aves, lagartijas, iguanas, tlacuaches y conejos, entre otros.  se desempeña, asimismo, como agente limitante de otros felinos más pequeños, como el tigrillo, el jaguarundi o la oncilla (un felino que habita en centro y sudamérica).',
          habitad: 'Su distribución actual va desde el sur de Estados unidos hasta el norte de argentina. se desarrolla en una variedad de tipos de hábitat, que incluyen bosque espinoso y matorral xerófilo en el norte, y en el bosque mesófilo de montaña, selvas húmedas y secas en el resto de su distribución en el país.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'hKBHR3NYpx',
        nombre: 'TAITETU',
        nombreC: 'PECARI TAJACU',
        tipo: 'TAYASSUIDAE',
        imagen: [
          { id: '0', link: 'assets/img/DSC08401.JPG' },
          { id: '0', link: 'assets/img/DSC08402.JPG' },
          { id: '0', link: 'assets/img/DSC08403.JPG' },
          { id: '0', link: 'assets/img/DSC08404.JPG' },
          { id: '0', link: 'assets/img/DSC08407.JPG' },
        ],
        coments: {
          descripcion: 'LOS PECARÍES MIDEN 90 CM, CON UNA COLA DE 5 CM., TIENE 50 CM DE ALZADA. EL PESO ES DE 20 A 30 KG., POR LO GENERAL POSEE EN LA PARTE DORSAL UNA GLÁNDULA QUE SECRETA UNA SUSTANCIA DE OLOR PENETRANTE, SU PELAJE ES LARGO Y ESPESO, COLOR CASTAÑO CON UNA MANCHA BLANCA EN FORMA DE COLLAR. LOS INDIVIDUOS JÓVENES SON ROJIZOS Y EXHIBEN UNA RAYA NEGRA ANGOSTA A LO LARGO DEL LOMO.',
          habitos: 'HABITA DESDE EL NIVEL DEL MAR HASTA 100 IN DIVIDÍOS O MÁS, DE EDADES Y SEXOS DISTINTOS QUE COOPERAN PARA REPELER A LOS ENEMIGOS. TAMBIÉN VIVEN EN MINADAS DOMINADAS Y CONDUCIDAS POR MACHOS, CUANDO SE ENCUENTRAN AMENAZADOS CHASQUEAN MUY RÁPIDO LOS DIENTES Y PRODUCEN UN SONIDO SIMILAR A CASTAÑUELAS  PARA ASUSTAR A SUS ENEMIGOS. SUELEN FROTAR SUS CARAS UNOS CON OTROS PARA ASEARSE ENTRE SÍ.',
          reproducion: '',
          alimentacion: 'ALIMENTACIÓN	PRINCIPALMENTE SE ALIMENTA DE VEGETALES COMO BAYAS, BROTES, TUBÉRCULOS Y BULBOS;  PERO TAN BIEN DE LARVAS, GUSANOS Y VERTEBRADOS PEQUEÑOS COMO SERPIENTES Y LAGARTIJAS.',
          habitad: 'TIENE UN AMPLIO RANGO DE DISTRIBUCIÓN QUE VA DESDE SUR DE LOS ESTADOS UNIDOS A ARGENTINA; EN COLOMBIA LO PODEMOS ENCONTRAR EN DEPARTAMENTOS COMO: VICHADA, VAUPÉS, CASANARE, Y CAUCA.RNHABITA DESDE EL NIVEL DEL MAR HASTA LOS BOSQUES HÚMEDOS. SE LE PUEDE ENCONTRAR EN UNA  VARIEDAD DE HÁBITATS EN BOSQUES Y SELVAS RARAMENTE EN LLANURAS AL DESCUBIERTO.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'iIQAcSJU3J',
        nombre: 'URINA',
        nombreC: 'MAZAMA GOUZOUBIRA',
        tipo: 'CERVIDAE',
        imagen: [
          { id: '0', link: 'assets/img/1582281760.jpg' },
          { id: '0', link: 'assets/img/DSC08353.JPG' },
          { id: '0', link: 'assets/img/DSC08354.JPG' },
        ],
        coments: {
          descripcion: 'SU COLORACIÓN ES DE UN TONO PARDO-ROJIZO, CUANDO SON JÓVENES SON MÁS GRISES QUE ROJIZAS Y CON VARIAS MANCHAS BLANQUECINAS EN SU TORSO Y MUSLOS, SUELE DISTINGUIRSE, POR SUS GRANDES OJOS NEGROS Y OREJAS FIRMES Y PUNTIAGUDAS SIEMPRE ALERTAS ANTE CUALQUIER PELIGRO QUE LE ASECHE.RNLA PARTE DEL PECHO Y VIENTRE A VECES SE MUESTRAN OSCURAS, ESTO DEBIDO A QUE SE ENSUCIA AL ENTRAR AL LODO, PUES EN REALIDAD DESDE EL CUELLO HASTA LA PARTE INFERIOR DE SU PEQUEÑA COLA ES BLANQUECINO.RNA DIFERENCIA DE GRAN PARTE DE LOS MAMÍFEROS LA URINA NO PRESENTA GRAN DIMORFISMO SEXUAL, ES DECIR QUE TANTO HEMBRAS COMO MACHO SON BASTANTES SIMILARES; AMBOS ALCANZAN ENTRE 55 Y 65 CM DE ALTO, Y HASTA 110 CM DE LARGO, LLEGANDO A PESAR LOS 30 KG.RNHAY UNA CARACTERÍSTICA QUE MARCA EL CAMBIO DE UN EJEMPLAR JOVEN A UN ADULTO, SON LOS CUERNOS.RNA PARTIR DEL AÑO DE VIDA A LOS MACHOS LES CRECE UNA CORNAMENTA SENCILLA, SIN RAMIFICAR QUE LLEGA A MEDIR APROXIMADAMENTE LOS 15 CM.',
          habitos: 'LAS URINAS SON ANIMALES MUY SOLITARIOS Y BASTANTES TERRITORIALES, PREFIEREN ANDAR SOLOS O EN PAREJAS POR LAS AMPLIAS PRADERAS, Y A MEDIDA QUE SE DESPLAZAN VAN MARCANDO SU TERRITORIO, DEJANDO SU ORINA Y SUS HECES FECALES EN LOS ÁRBOLES Y ARBUSTOS, TAMBIÉN DESCORTEZA EL TRONCO DE LOS ÁRBOLES. ADEMÁS POSEEN UNA GLÁNDULA QUE DESPIDE UN FUERTE OLOR MUY PECULIAR.',
          reproducion: 'DURA UNOS 220 DÍAS Y SÓLO NACE UNA CRÍA (EXCEPCIONALMENTE DOS). LOS MACHOS MADURAN AL AÑO Y MEDIO, MIENTRAS LAS HEMBRAS A LOS DOS AÑOS.',
          alimentacion: 'EN CUANTO A LA ALIMENTACIÓN, ESTOS CIERVOS “MEDIANOS” GUSTAN DE LOS BROTES TIERNOS, HOJAS FRESCAS, HONGOS Y EN OCASIONES FRUTOS QUE ESTÉN A SU ALCANCE.',
          habitad: 'SE DISTRIBUYE DESDE EL SUR DE MÉXICO HASTA EL NORTE DE ARGENTINA Y EN EL ORIENTE Y PARTE DEL CHACO BOLIVIANO. VIVE EN LAS PRADERAS, ZONAS BOSCOSAS Y SELVAS POCO POBLADAS.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'n0hver5sqM',
        nombre: 'MONO CAPUCHINO',
        nombreC: 'SAPAJUS CAY',
        tipo: 'PRIMATE',
        imagen: [
          { id: '0', link: 'assets/img/DSC07456.JPG' },
          { id: '0', link: 'assets/img/DSC07483.JPG' },
          { id: '0', link: 'assets/img/DSC07503.JPG' },
          { id: '0', link: 'assets/img/DSC07496.JPG' },
          { id: '0', link: 'assets/img/DSC07512.JPG' },
        ],
        coments: {
          descripcion: 'MIDE 45 CMS, MASA 35 A 50 CMS DE COLA, ÉSTA ES PRENSIL Y CASI DEL MISMO TAMAÑO DEL CUERPO. NO SOBREPASA LOS 4 KG.',
          habitos: 'VIVEN EN GRUPOS PEQUEÑOS, PERMANECEN LA MAYORÍA DEL TIEMPO EN LOS ÁRBOLES, SON VIVACES Y INTELIGENTES. NO LES GUSTA EL FRÍO NI LLA HUMEDAD, AL SENTIRSE AMENAZADO RECURRE A GRITOS AGUDOS Y ESPANTOSOS PARA ASUSTAR AL ENEMIGO.',
          reproducion: '4,5 A 5,5 MESES',
          alimentacion: 'FRUTOS, HOJAS Y PEQUEÑOS ANIMALES',
          habitad: 'SURAMÉRICA, DE LOS ANDES. SELVAS HÚMEDAS Y ESPESAS.'
        },
        locate: { lat: '', lng: '' }
      },

      {
        id: 'WENrcaCWUi',
        nombre: 'ARMADILLO AMARILLO',
        nombreC: 'EUPHRACTUS SEXCINTUS',
        tipo: 'DASYPODIDAE',
        imagen: [
          { id: '0', link: 'assets/img/DSC08313.JPG' },
          { id: '0', link: 'assets/img/DSC08329.JPG' },
          { id: '0', link: 'assets/img/DSC08338.JPG' },
          { id: '0', link: 'assets/img/DSC08393.JPG' },
          { id: '0', link: 'assets/img/DSC08396.JPG' },
        ],
        coments: {
          descripcion: 'ES UNA DE LAS ESPECIES MÁS GRANDES DE ARMADILLOS. EL CAPARAZÓN ES APLANADO Y ANCHO, CON 6 A 8 BANDAS MÓVILES; SU COLORACIÓN ES AMARILLENTA A PARDO ROJIZA, GENERALMENTE BASTANTE PÁLIDA. LA CABEZA ES TRIANGULAR, PUNTIAGUDA Y CON UN PERFIL ALGO CONVEXO; LAS OREJAS SON MÁS LARGAS QUE EN EL PELUDO (C. VILLOSUS). TANTO LAS PATAS ANTERIORES COMO LAS POSTERIORES TIENEN 5 DEDOS; LAS DELANTERAS POSEEN GARRAS LARGAS Y FINAS. SU MAYOR TAMAÑO CORPORAL LO DIFERENCIA DE LOS OTROS ARMADILLOS CON PELO.',
          habitos: '',
          reproducion: 'ESTA ES UNA ESPECIE COMÚN (REDFORD AND WETZEL, 1985). MACHOS Y HEMBRAS  ALCANZAN LA MADUREZ AL AÑO DE EDAD, LAS HEMBRAS POSIBLEMENTE DAN A LUZ VARIAS CAMADAS POR AÑO, EL TAMAÑO DE LA CAMADA ES DE UNA A TRES CRÍAS.',
          alimentacion: '',
          habitad: 'EL GUALACATE O ARMADILLO DE SEIS BANDAS ESTÁ PRESENTE EN UNA AMPLIA ZONA DE AMÉRICA DEL SUR, DESDE EL SUR DE SURINAME Y BRASIL A BOLIVIA, PARAGUAY, URUGUAY Y NORTE DE ARGENTINA. ESTE ARMADILLO HABITA ÁREAS ABIERTAS, PASTIZALES, MATORRAL Y BOSQUE SECO SEMIDECIDUO. PUEDE ENCONTRARSE EN BOSQUES SECUNDARIOS, Y TAMBIÉN EN SELVA PRIMARIA AMAZÓNICA.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'eMK7YHZkaJ',
        nombre: 'QUIRQUINCHO',
        nombreC: 'CHAETOPHRACTUS NATIONI',
        tipo: 'DASYPODIDAE',
        imagen: [
          { id: '0', link: 'assets/img/1582285631.jpg' },
          { id: '0', link: 'assets/img/1582285631.jpg' },
          { id: '0', link: 'assets/img/1582285631.jpg' },
          { id: '0', link: 'assets/img/1582285631.jpg' },
        ],
        coments: {
          descripcion: 'EL QUIRQUINCHO ES EL ÚNICO ARMADILLO QUE HABITA ZONAS FRÍAS A GRAN ALTITUD EN NUESTRO CONTINENTE (MCNAB, 1980). TIENE TAMAÑO MEDIANO, CUYO PESO OSCILA ENTRE LOS 1400 Y 2000 G, Y CUYA LONGITUD VARÍA ENTRE 375 Y 420 M, SIENDO UNA ADAPTACIÓN EVIDENTE LA PRESENCIA DE GRAN CANTIDAD DE PELO EN SU CUERPO, A DIFERENCIA DE LOS ARMADILLOS DE TIERRAS BAJAS. CH. NATIONI PRESENTA UN DORSO DE COLOR ACANELADO Y PELAJE QUE VARÍA EN SU COLORACIÓN ENTRE UN TONO CANELA Y BLANCO BRILLANTE (WETZEL, 1985B). LA ANATOMÍA DEL ANIMAL MUESTRA QUE EL QUIRQUINCHO ESTÁ COMPLETAMENTE ADAPTADO A LA EXCAVACIÓN (MANN-FISHER, 1978).',
          habitos: 'EL QUIRQUINCHO ES PRINCIPALMENTE NOCTURNO. ES OMNÍVORO, SIENDO IMPORTANTES EN SU DIETA: INSECTOS, RAÍCES Y SEMILLAS DE ALGUNAS PLANTAS (P.E., THOLAS Y PAJAS) (RAMÍREZ, 2006). NO EXISTE INFORMACIÓN FIDEDIGNA SOBRE SU REPRODUCCIÓN, PERO MANN-FISHER (1978) SOSTIENE QUE TIENE DE 1 A 2 CRÍAS ANUALMENTE EN LA ÉPOCA DE MAYOR DISPONIBILIDAD DE RECURSOS. SE HAN IDENTIFICADO DOS ELEMENTOS NECESARIOS PARA LA CONSTRUCCIÓN DE CUEVAS, LAS QUE SON VITALES EN LA ECOLOGÍA DE LA ESPECIE: SUSTRATOS ARENOSOS Y VEGETACIÓN (PÉREZ-ZUBIETA, 2008).',
          reproducion: '',
          alimentacion: '',
          habitad: 'LA ESPECIE CH. NATIONI ES ENDÉMICA DE LA PUNA. SU ÁREA DE DISTRIBUCIÓN ABARCA ÁREAS PUNEÑAS DE BOLIVIA (ANDERSON, 1997), NORTE DE ARGENTINA (CARRIZO ET AL., 2005; VIZCAÍNO ET AL., 2006) Y NORTE DE CHILE (ABBA ET AL., 2008; TAMAYO, 2000). EN BOLIVIA, ES CONOCIDO EN LOS DEPARTAMENTOS DE LA PAZ, ORURO Y POTOSÍ (ANDERSON, 1997), OCUPANDO SOLAMENTE LA ECORREGIÓN DE LA PUNA SUREÑA. ESTÁ RESTRINGIDO A ARENALES Y SUELOS SUAVES. ESTA ESPECIE OMNÍVORA HABITA EN PASTIZALES DE ALTURA, DONDE CAVA SU MADRIGUERA EN SUELOS ARENOSOS (REDFORD Y EISENBERG 1992, PÉREZ ZUBIETA 2008).'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'e7EPpSp0GQ',
        nombre: 'TEJÓN',
        nombreC: 'NASUA NASUA',
        tipo: 'PROCYONIDAE',
        imagen: [
          { id: '0', link: 'assets/img/istockphoto-489932018-1024x1024.jpg' },
          { id: '0', link: 'assets/img/Nasua nasua Puyo 2006 7.jpg' },
          { id: '0', link: 'assets/img/Nasua_nasua.jpg' },
        ],
        coments: {
          descripcion: 'EL COATÍ ROJO MIDE EN LA CABEZA, CUERPO Y COLA DE 80 A 130 CM, DE LOS CUALES LA COLA REPRESENTA POCO MÁS DE LA MITAD. EL PESO DE LOS MACHOS ADULTOS ES DE 4.0 A 5.6 KILOGRAMOS. LAS HEMBRAS PESAN DE 3.5 A 4.5 KILOGRAMOS.RNTIENEN LA CABEZA ALARGADA TERMINADA EN UN HOCICO ESTRECHO Y MÓVIL, LA COLA LARGA Y GRUESA EN LA BASE Y PODEROSAS GARRAS CON LAS QUE PUEDEN TREPAR POR LOS ÁRBOLES CON SOLTURA Y TAMBIÉN EXCAVAR EN TERRENOS DE MEDIANA DUREZA. EL PELAJE ES LARGO Y TUPIDO. LOS ADULTOS MIDEN MÁS DE 60 CENTÍMETROS, A LOS QUE HAY QUE AÑADIR CASI OTRO TANTO DE LA COLA. SON PLANTÍGRADOS, PUESTO QUE APOYAN TODA LA PLANTA DEL PIE AL CAMINAR. LA COLORACIÓN ES MUY VARIABLE, DESDE UN PARDO CLARO HASTA CASI NEGRO, CON LAS REGIONES VENTRALES MÁS CLARAS Y, EN MUCHOS CASOS, ANILLOS EN LA COLA. LOS MACHOS SON MUCHOS MÁS GRANDES QUE LAS HEMBRAS, LLEGANDO A LOS 8 KILOGRAMOS DE PESO, Y POSEEN GRANDES Y AFILADOS CANINOS.',
          habitos: 'ESTE COATÍ ES ACTIVO EN LOS ÁRBOLES Y EN LA TIERRA. ESTA ESPECIE ES MÁS ACTIVA DURANTE EL DÍA, ES DIURNA; AUNQUE LOS MACHOS SON TAMBIÉN ACTIVOS DURANTE LA NOCHE.',
          reproducion: 'EL PERÍODO DE GESTACIÓN TOMA UNOS SETENTA Y SIETE DÍAS. TODO EL ACOPLAMIENTO OCURRE EN LOS ÁRBOLES. TRES O 4 SEMANAS ANTES DE DAR A LUZ. LAS CAMADAS DE LOS COATIS SON DE 2 A 7 JÓVENES. NACEN CON LOS OJOS CERRADOS, ABRIÉNDOLOS AL DÉCIMO PRIMER DÍA. LOS CRÍOS PERMANECEN CON SU MADRE DE 5 A 6 SEMANAS EN UNA PLATAFORMA QUE ESTA CONSTRUYE EN LOS ÁRBOLES, DESPUÉS DE ESTE PERIODO LA MADRE LOS BAJA PARA QUE ELLOS ANDEN EN EL SUELO. LOS MACHOS SON SEXUALMENTE MADUROS A LOS 3 AÑOS, MIENTRAS QUE LAS HEMBRAS ALCANZAN SU MADUREZ EN SU SEGUNDO AÑO',
          alimentacion: 'LA ALIMENTACIÓN DE NASUA NASUA SE BASA DE INVERTEBRADOS, FRUTAS Y OTRAS PARTES VEGETALES. TAMBIÉN COMEN PEQUEÑOS VERTEBRADOS.',
          habitad: 'NASUA NASUA ES NATURAL DE AMÉRICA DEL SUR. SU DISTRIBUCIÓN COMPRENDE EL ESTE DEL CONTINENTE HASTA EL NORTE DE ARGENTINA Y URUGUAY. EL COATÍ MARRÓN HABITA EN LOS BOSQUES TROPICALES SECOS DONDE HAY CURSOS O DEPÓSITOS DE AGUA.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'vKlkb4DhZa',
        nombre: 'PARABA ROJA',
        nombreC: 'ARA CHLOROPTERA',
        tipo: 'ave',
        imagen: [
          { id: '0', link: 'assets/img/DSC08369.JPG' },
          { id: '0', link: 'assets/img/DSC08389.JPG' },
          { id: '0', link: 'assets/img/DSC05720.JPG' },
          { id: '0', link: 'assets/img/DSC05726.JPG' },
        ],
        coments: {
          descripcion: 'AVES DE COLA LARGA Y PICO FUERTE, PRESENTAN UN PLUMAJE CON COLORES VARIADOS ENTRE ELLOS LA GUACAMAYA AZUL ARA ARARAUNA, GUACAMAYO ROJO, ARA MACAO.',
          habitos: 'VIVEN EN BANDADAS QUE SUELEN SER NUMEROSAS, Y QUE SÓLO SE SEPARAN EN LA ÉPOCA DE CELO, O CUANDO ESTÁN BUSCANDO COMIDA, RECORREN GRANDES DISTANCIAS DURANTE SUS MAJESTUOSOS VUELOS. PONEN DE DOS A TRES HUEVOS POR NIDADA. SON MONÓGAMOS.',
          reproducion: '',
          alimentacion: 'FRUTAS, NUECES Y SEMILLAS, SON SU ALIMENTO PREDILECTO AUNQUE TAMBIÉN CONSUMEN ALGUNOS INSECTOS Y VEGETALES.',
          habitad: 'TRÓPICO AMERICANO. BOSQUES Y SELVAS SEPTENTRIONALES, LLANURAS CERCANAS A RÍOS Y ARROYOS. HABITAN LA ZONA ALTA DE LOS BOSQUES.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'gMrhhdfMH6',
        nombre: 'PARABA AZUL AMARILLO',
        nombreC: 'ARA ARARAUNA',
        tipo: 'ave',
        imagen: [
          { id: '0', link: 'assets/img/DSC05824.JPG' },
          { id: '0', link: 'assets/img/DSC08267.JPG' },
          { id: '0', link: 'assets/img/DSC07452.JPG' },
          { id: '0', link: 'assets/img/DSC07444.JPG' },
        ],
        coments: {
          descripcion: 'ES UNA AVE DE PLUMAJE MUY VISTOSO DE COLOR AZUL, SUS ALAS SUELEN SER CORTAS Y REDONDEADAS, PERO SU COLA ES BASTANTE LARGA; SU PICO ES GRIS OSCURO, CURVO Y FUERTE; MIDE APROXIMADAMENTE 55 CM INCLUIDA SU COLA DE 35 CM., Y PESA ALREDEDOR DE 1200 GR. ES EL ARA MÁS PEQUEÑA DE BRASIL. VIVE EN CLIMAS TEMPLADOS Y HÚMEDOS.',
          habitos: 'PUEDE VIVIR EN CAUTIVERIO Y EN LIBERTAD, Y RECORRER UNOS 50 KILÓMETROS DE VUELO. AL VER UNA HEMBRA, EL MACHO LANZA CHILLIDOS COMO SEÑAL DE ATRACCIÓN SEXUAL, LA HEMBRA SE EXCITA Y DE ESTA MANERA SE GARANTIZA LA REPRODUCCIÓN.RNGENERALMENTE HABITAN EN PAREJAS, PERO TAMBIÉN FORMAN PEQUEÑOS GRUPOS FAMILIARES. CONSTRUYEN SUS NIDOS EN LAS CAVIDADES DE LOS ARBOLES. CUANDO VUELAN LO HACEN TAN CERCA, QUE SUS ALAS CASI TOCAN.',
          reproducion: 'OVÍPARO, ES DECIR, LA HEMBRA PONE DE 1 A 4 HUEVOS DE COLOR BLANCO, DONDE SE DESARROLLA EL EMBRIÓN. ESTOS HUEVOS SON INCUBADOS DE 24 A 26 DÍAS.',
          alimentacion: 'HERBÍVORA Y FRUGÍVORA, SE ALIMENTA DE SEMILLAS DE PINO, FRUTOS ESPINOSOS Y NUECES, ADEMÁS DE HOJAS Y MATERIA VEGETAL.',
          habitad: 'DESDE BRASIL HASTA MÉXICO. TAMBIÉN EN ARGENTINA, PERO CON MAYOR PRESENCIA EN EL NORTE Y CENTRO DE AMÉRICA DEL SUR. TERRESTRE.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'qUhwD3Gm11',
        nombre: 'LORO HABLADOR',
        nombreC: 'AMAZONA AESTIVA',
        tipo: 'ave',
        imagen: [
          { id: '0', link: 'assets/img/DSC05833.JPG' },
          { id: '0', link: 'assets/img/DSC07429.JPG' },
          { id: '0', link: 'assets/img/DSC07438.JPG' },
          { id: '0', link: 'assets/img/DSC08268.JPG' },
          { id: '0', link: 'assets/img/DSC08272.JPG' },
        ],
        coments: {
          descripcion: 'ES UNA ESPECIE SUDAMERICANA DE LORO AMAZÓNICO. ES UNA DE LAS ESPECIES DE AMAZONAS MÁS EXTENDIDAS POR SUDAMÉRICA; OCUPA LAS SELVAS DE GALERÍA DE BOLIVIA Y BRASIL, Y PARTES DEL NORTE DE PARAGUAY Y ARGENTINA.RNMIDE DE LOS 35-37 CM, LLEGANDO A PESAR ENTRE 350-450 G. EL BORDE DE LAS ALAS ES ROJO O AMARILLO, CON LAS COBERTERAS ALARES ROJAS. OJOS DE COLOR NARANJA. EL PICO DE COLOR NEGRUZCO Y LAS PATAS GRISES. LOS EJEMPLARES JÓVENES PRESENTAN UNA COLORACIÓN DISTINTA A LA DE LOS ADULTOS; LA CABEZA ES DE COLOR VERDE, AZULADO Y AMARILLO PÁLIDO. EL BORDE SUPERIOR DEL ALA Y EL VÉRTICE FLEXOR DE LA MISMA SON DE UNA TONALIDAD MÁS PÁLIDA. LA PUPILA ES DE COLOR GRIS OSCURO EN LAS CRÍAS HASTA QUE ALCANZAN EL AÑO DE EDAD.RNSON AVES MUY LONGEVAS, EN LAS QUE SE HAN DADO CASOS EXTREMOS DE ANIMALES QUE HAN SOBREVIVIDO HASTA EDADES DE 70 Ó 90 AÑOS.RNEN ESTA ESPECIE EL SEXO DE LOS EJEMPLARES NO SE DISTINGUE A SIMPLE VISTA. HAY AUTORES QUE AFIRMAN QUE LOS MACHOS SON MÁS GRANDES QUE LAS HEMBRAS O QUE EL TAMAÑO DEL PICO Y LA CABEZA ENTRE EL MACHO Y LA HEMBRA ES DIFERENTE, PERO ESTAS DISTINCIONES SON TOTALMENTE SUBJETIVAS Y NECESITAN DE OJOS EXPERTOS PARA PODER ACERTAR CON UN MÍNIMO DE GARANTÍAS.',
          habitos: 'ES UNO DE LOS MEJORES IMITADORES QUE EXISTEN DENTRO DEL GRUPO DE LAS PSITÁCIDAS DESPUÉS DE LOS YACOS. TIENEN UNA CAPACIDAD DE APRENDIZAJE BASTANTE DESARROLLADA PERO SOBRE TODO EN INDIVIDUOS JÓVENES. CONFORME VAN CRECIENDO SU CAPACIDAD DE APRENDIZAJE DISMINUYE NOTABLEMENTE. A PARTE DE SER UNOS GRANDES IMITADORES TIENEN OTRA CUALIDAD QUE LES CARACTERIZA; TIENEN UNA VOZ MUY POTENTE Y AGUDA, Y LES ENCANTA GRITAR.RNSE CONOCEN DOS SUBESPECIES DE ESTE LORO Y DIVERSAS VARIEDADES DE COLOR (AZUL PÁLIDO, AMARILLENTO, JASPEADO EN AMARILLO).',
          reproducion: 'SON ANIMALES QUE SE REPRODUCEN CON RELATIVA FACILIDAD EN CAUTIVIDAD, ESO SÍ, MEJOR EN UN AVIARIO DE DIMENSIONES CORRECTAS QUE EN UNA JAULA. LA HEMBRA PONE DE DOS A CINCO HUEVOS QUE INCUBARÁ DURANTE UN PERIODO APROXIMADO DE 25 A 28 DÍAS. EL MACHO SE OCUPARÁ DE ALIMENTAR A LA HEMBRA DURANTE EL PERIODO DE INCUBACIÓN, Y LA HEMBRA A LOS POLLUELOS DURANTE LAS TRES SEMANAS QUE LA HEMBRA PASA DENTRO DEL NIDO CON LOS POLLOS DESPUÉS DE LA ECLOSIÓN. LAS CRÍAS ABANDONAN EL NIDO A LAS 8-9 SEMANAS DE EDAD Y SEGUIRÁN SIENDO ALIMENTADOS POR LOS PROGENITORES DURANTE ALGÚN TIEMPO MÁS. ALCANZARÁN LA MADUREZ SEXUAL A LA EDAD DE 5-6 AÑOS (EN CAUTIVIDAD LA ALCANZAN UN POCO ANTES), AUNQUE ES PREFERIBLE QUE SE REPRODUZCAN CON LOS 6 AÑOS CUMPLIDOS. EN LA PRIMERA PUESTA EL NÚMERO DE HUEVOS, ASÍ COMO, LA FERTILIDAD DE LOS MISMOS DISMINUYE POR DEBAJO DE LA MEDIA. SUELEN CRIAR UNA VEZ POR TEMPORADA, SIENDO MAYO EL PERIODO DEL AÑO MÁS FAVORABLE PARA ANIDAR EN ZONAS DE CLIMA TEMPLADO Y ABRIL EN ZONAS DE CLIMA CÁLIDO. HAY QUE SEÑALAR QUE ESTA ESPECIE DE AVES SE VUELVE TERRIBLEMENTE AGRESIVA DURANTE LA ÉPOCA DE CRÍA, ESPECIALMENTE EL MACHO, QUE ATACA A TODO AQUEL QUE SE LE ACERCA, POR TANTO ES ACONSEJABLE EXTREMAR LAS PRECAUCIONES A LA HORA DE LIMPIAR EL AVIARIO Y DURANTE LA REPOSICIÓN DEL ALIMENTO. HAY QUE SEPARAR A LA PAREJA DE LOS PÁJAROS QUE COMPARTAN EL AVIARIO Y HAY QUE SITUAR LA CAJA NIDO DE TAL MANERA QUE PUEDA INSPECCIONARSE DESDE FUERA DEL ALOJAMIENTO.',
          alimentacion: 'SON ANIMALES QUE SE ALIMENTAN PRINCIPALMENTE DE SEMILLAS, FRUTAS Y VERDURAS. SE ADAPTAN BASTANTE BIEN A CUALQUIER TIPO DE DIETA O A LA VARIACIÓN DE ÉSTA SIN EXCESIVOS PROBLEMAS.RNEL 50% DE LA DIETA DE LAS AMAZONAS ESTARÁ FORMADA POR SEMILLAS DE TODO TIPO, EVITANDO ABUSAR DE AQUELLAS QUE SON DEMASIADO GRASAS COMO PIPAS DE GIRASOL, CACAHUETES O NUECES, EXCEPTO EN ÉPOCAS EN LAS QUE EL AVE TENGA UN DESGASTE EXTRAORDINARIO, COMO DURANTE LA MUDA O EL PERIODO REPRODUCTIVO. COMERÁN ALPISTE, MIJO BLANCO, MIJO EN MAZORCA, SEMILLAS DE GIRASOL SIN SAL, ALAZOR, PIÑONES, CÁÑAMO, CACAHUETES, MAÍZ EN MAZORCA...RNEL RESTO DE LA DIETA DE LAS AMAZONAS SE COMPONDRÁ DE FRUTAS Y VERDURAS FRESCAS DE TODO TIPO, BAYAS NO VENENOSAS, FLORES Y BROTES.RNCOMO HEMOS MENCIONADO CON ANTERIORIDAD, LAS AMAZONAS NO SON AVES QUE TENGAN GRANDES ESCRÚPULOS A LA HORA DE ACEPTAR COMIDA, ASÍ QUE NO PODEMOS SUMINISTRARLAS TODA CLASE DE SOBRAS PROVENIENTES DE NUESTRAS MESAS, SI BIEN, ATENDIENDO A LO QUE NUESTRO RACIOCINIO NOS DICTE RESPECTO A QUE ALIMENTOS NUNCA DEBERÍAMOS DARLES. PODEMOS SUMINISTRARLES PAN TOSTADO, BIZCOTES Y VERDURAS HERVIDAS, HUESOS DE COSTILLAS Y DE POLLO CON ALGO DE CARNE ENGANCHADA... NO ESTÁ DE MÁS RECORDAR QUE ESTE ALIMENTO NO DEJA DE SER MÁS QUE UN COMPLEMENTO O UNA GOLOSINA, NO LA DIETA PRINCIPAL DE NUESTRA MASCOTA. NO OLVIDEMOS AÑADIR ALGO DE CALCIO A LA DIETA DE NUESTROS LOROS CON ALGÚN QUE OTRO HUESO DE JIBIA Y MINERALES CON UN BLOQUE MINERAL.RNLOS PIENSOS ESPECÍFICOS, SON UNA BUENA SOLUCIÓN PARA MANTENER UNA DIETA EQUILIBRADA PARA NUESTRA AVE O PARA COMPLETAR LAS POSIBLES DEFICIENCIAS ALIMENTARIAS QUE PODAMOS CAUSAR AL PÁJARO AL NO DARLE UNA DIETA COMPLETA. TIENEN TENDENCIA A LA OBESIDAD SI ESTÁN EN CAUTIVIDAD POR LA FALTA DE EJERCICIO, POR ELLO ES IMPORTANTE MANTENER UN EQUILIBRIO EN LAS GRASAS QUE INGIEREN Y MANTENERLOS ACTIVOS.',
          habitad: 'LA AMAZONA EN LA NATURALEZA VIVE EN SELVAS PRIMARIAS Y SECUNDARIAS, LO QUE NO IMPIDE QUE SE DESPLACE A ZONAS MÁS ABIERTAS EN BUSCA DE COMIDA. EN BOLIVIA, MÁS CONCRETAMENTE, EN LA REGIÓN DEL CHACO HABITA TANTO EN SELVAS HÚMEDAS COMO EN CADUCIFÓLEAS, Y EN PARAGUAY SE LA HA OBSERVADO EN BOSQUES DE PALMERAS. AL AMANECER GRANDES BANDADAS DE ESTOS PÁJAROS ABANDONAN LA SEGURIDAD DE LA ESPESURA SELVÁTICA, QUE HAN UTILIZADO COMO PROTECCIÓN DURANTE LA NOCHE Y SE DESPLAZAN EN BUSCA DE COMIDA.RNESTÁ DISTRIBUIDA EN BRASIL NORORIENTAL HASTA PARAGUAY, BOLIVIA Y NORTE DE ARGENTINA. LA ESPECIE NOMINAL SE ENCUENTRA AL ESTE DE BRASIL Y HACIA EL SUR HASTA RÍO GRANDE DO SUL Y EN EL SUDOESTE DE MATO GROSSO.'
        },
        locate: { lat: '', lng: '' }
      },
      /*{
        id: '',
        nombre: 'PARABA FRENTE CASTAÑA',
        nombreC: 'ARA SEVERUS',
        tipo: 'a',
        imagen: [
          { id: '0', link: 'assets/img/1582285631.jpg' },
        ],
        coments: {
          descripcion: 'ES CONSIDERADO UN GUACAMAYO PEQUEÑO: DE ADULTO MIDE ENTRE 40 Y 50 CM DE LONGITUD; LOS MACHOS PESAN ENTRE 350 Y 390 G Y LAS HEMBRAS DE 300 A 360 G.RNRNEN SU PLUMAJE PREDOMINA EL COLOR VERDE, EXCEPTO POR LA PARTE INFERIOR DE LAS ALAS, QUE ES ROJA, Y LA PARTE SUPERIOR DE LAS PRIMARIAS, QUE ES AZUL; LAS PLUMAS DE LA COLA TAMBIÉN SON ROJAS Y AZULES.',
          habitos: 'EN PAREJAS O BANDADAS PEQUEÑAS DE HASTA 10 AVES, PER PUEDE SER ENCONTRADA EN MAYOR NÚMERO EN DORMIDEROS. SE ALIMENTA EN EL DOSEL.',
          reproducion: '',
          alimentacion: '',
          habitad: 'POCO COMÚN A BASTANTE COMÚN EN BORDES DE UNA VARIEDAD DE BOSQUES SEMIHÚMEDOS A HÚMEDOS DE TIERRAS BAJAS Y LADERA ESTE INFERIOR DE LOS ANDES NORTE Y CENTRAL; TAMBIÉN EN ARBOLES AISLADOS DE CLAROS, PARCHES DE BOSQUE REMANENTE EN ZONAS AGRÍCOLAS Y PARQUES URBANOS; PRINCIPALMENTE DEBAJO DE 900 M; EN EL OESTE DE SANTA CRUZ Y EL ESTE DE CHUQUISACA LOCALMENTE SE ENCUENTRA HASTA 1300 M.'
        },
        locate: { lat: '', lng: '' }
      },*/
      {
        id: '5WPlnRwpXq',
        nombre: 'COTORRA DE CARA ROJA',
        nombreC: 'ARATINGA MITRATA',
        tipo: 'ave',
        imagen: [
          { id: '0', link: 'assets/img/ec85da12edeedb3a02732b0206f8889e.jpg' },
          { id: '0', link: 'assets/img/unnamed.jpg' },
          { id: '0', link: 'assets/img/55c226109862865e633cd301e22808f8.jpg' },
          { id: '0', link: 'assets/img/942b1dc442b0e976be04cd84621e2730.jpg' },
        ],
        coments: {
          descripcion: 'TAMAÑO: DE 31 A 38 CM. DE LONGITUD. PESO ENTRE 219 Y 275 G. COLORACIÓN: TIENE LA FRENTE DE COLOR MARRÓN ROJIZO CON UNA FUSIÓN DE COLOR ROJO BRILLANTE EN LA PARTE DELANTERA DE LA CORONA; LOS LORES Y LAS MEJILLAS HASTA LA PARTE TRASERA DE LOS OJOS, DE COLOR ROJO BRILLANTE; LOS LADOS DEL CUELLO DE COLOR VERDE OSCURO CON PLUMAS ROJAS DISPERSAS. LAS PARTES SUPERIORES DESDE LA PARTE TRASERA DE LA CORONA HASTA LAS COBERTERAS SUPRACAUDALES, DE COLOR VERDE OSCURO A VECES CON ALGUNAS PLUMAS ROJAS DISPERSAS (ESPECIALMENTE EN LA NUCA). COBERTERAS SUPRA-ALARES Y LAS PLUMAS DE VUELO, POR ARRIBA, DE COLOR VERDE, A VECES CON UNA O DOS PLUMAS DE COLOR ROJO OSCURO EN LA CURVA DEL ALA; PLUMAS DE VUELO DE COLOR MARRÓN-OLIVA POR DEBAJO. COBERTERAS INFRA-ALARES DE COLOR VERDE OPACO. LAS PARTES INFERIORES, SIN BRILLO, VERDE MÁS PÁLIDO CON TINTE OLIVA, POR LO GENERAL CON MARCAS ROJAS DISPERSAS, ESPECIALMENTE EN LOS MUSLOS. POR ARRIBA, LA COLA DE COLOR VERDE OSCURO CON LAS PUNTAS DE COLOR MARRÓN; PARDUZCA POR ABAJO. EL PICO DE COLOR BLANQUECINO; ANILLO ORBITAL DE COLOR BLANCO CREMOSO; IRIS DE COLOR NARANJA-AMARILLENTO; PATAS PARDUZCAS. DIMORFISMO SEXUAL: NO ES POSIBLE DETERMINAR EL SEXO, NO PRESENTA DIFERENCIAS FÍSICAS APRECIABLES ENTRE AMBOS SEXOS YA QUE SON SIMILARES. LOS INMADUROS CON MENOS PLUMAS ROJAS EN LA CABEZA, EN ESPECIAL, EN LAS MEJILLAS Y MARRÓN, NO NARANJA, EL IRIS.',
          habitos: 'LORO ACTIVO, MUY CURIOSO, EXTROVERTIDO QUE DE PRIMERAS PUEDE MOSTRARSE TÍMIDO PERO UNA VEZ ACOSTUMBRADO A LAS PERSONAS Y ENTORNO, TIENDE A SER MUY CONFIADO. AFECTUOSO Y JUGUETÓN, CON CARÁCTER Y TERRITORIALES, AUNQUE FUERA DEL PERIODO DE CRÍA SON COMPATIBLES CON ESPECIES QUE GUARDEN SIMILITUD, AUNQUE SOLO ACONSEJABLE SI ESTÁN EN UNA AMPLIA JAULA O VOLADERA. COMO MASCOTA PUEDE SER UNA MAGNÍFICA COMPAÑÍA, CARIÑOSOS Y MUY INTELIGENTES, Y SIEMPRE Y CUANDO SE EDUQUEN BIEN Y NO SEAN PROBLEMA SUS VOCALIZACIONES, PUEDEN SER MAGNÍFICOS LOROS MASCOTA',
          reproducion: 'NO ES UNA ESPECIE DIFÍCIL DE CRIAR. CUANDO SE PRETENDE CRIAR SIEMPRE ES IMPORTANTE QUE LOS DOS EJEMPLARES SEAN COMPATIBLES, LLEVEN UNA VARIADA Y ADECUADA ALIMENTACIÓN Y SEAN SEXUALMENTE MADUROS. POR LO GENERAL, PONEN DE 3 A 4 HUEVOS. ESTOS NO SE PONEN EN EL MISMO DÍA, PUEDE HABER INTERVALOS DE VARIOS DÍAS DE DESCANSO ENTRE HUEVO Y HUEVO, NORMALMENTE HAY UNO O DOS DÍAS DE DESCANSO. DESPUÉS DE APROXIMADAMENTE UNOS 23 DÍAS , LOS HUEVOS ECLOSIONAN. LOS PEQUEÑOS SUELEN SALIR DEL NIDO A LOS 2 MESES APROXIMADAMENTE. SIN EMBARGO, NO SERÁN MADUROS SEXUALMENTE HASTA LOS 2 AÑOS APROXIMADAMENTE. DURANTE TODO EL PERIODO DE CRÍA, LAS AVES DEBEN ESTAR EN UN AMBIENTE LO MÁS TRANQUILO POSIBLE PARA PREVENIR ESTRÉS QUE PUEDA AFECTAR DE MANERA NEGATIVA A LA NIDADA.',
          alimentacion: 'DEBE SER ALIMENTADO CON UNA BUENA MEZCLA DE FRUTAS FRESCAS Y VERDURAS DE MANERA DIARIA. EL MENÚ TIENE QUE SER MUY VARIADO Y DESDE LUEGO NO DEMASIADO GRASO. LOS LOROS PREFIEREN LAS SEMILLAS GRASAS (SEMILLAS DE GIRASOL, CACAHUETES.) Y HAY QUE EVITAR OFRECÉRSELAS CON FRECUENCIA, PUEDE SER DE MANERA REGULAR PERO DE FORMA CONTROLADA. TAMBIÉN SE PUEDE OFRECER PIENSO EXTORSIONADO QUE ES UN BUEN APORTE QUE APARTE DE SER BENEFICIOSO PARA SU ALIMENTACIÓN, TAMBIÉN APORTA VARIEDAD A SU DIETA. LAS SEMILLAS GERMINADAS SON BUENOS APORTES, SOBRE TODO EN ÉPOCA DE CRÍA.',
          habitad: 'EL ÁREA DE DISTRIBUCIÓN SE EXTIENDE DESDE EL CENTRO-NORTE DEL PERÚ, HACIA EL SUR A TRAVÉS DE BOLIVIA, HASTA EL NOROESTE DE ARGENTINA; CON POBLACIONES INTRODUCIDAS EN LOS ALREDEDORES DE LA CIUDAD DE BUENOS AIRES, CALIFORNIA, FLORIDA, Y HAWÁI. ESTA ESPECIE PUEDE CONSTITUIR UN COMPLEJO DE ESPECIES CRÍPTICAS. EN 1844 FUE DESCRITA CIENTÍFICAMENTE POR PRIMERA VEZ POR EL NATURALISTA SUIZO JOHANN JAKOB VON TSCHUDI. SU HÁBITAT NATURAL SON LAS FORESTAS Y HÁBITATS CERCANOS, GENERALMENTE A ALTITUDES DE 1000 A 3400 MSNM (3300 A 11 150 PIES). LA POBLACIÓN INTRODUCIDA EN CALIFORNIA SE PRESENTA PRINCIPALMENTE EN LOS PARQUES URBANOS Y ZONAS RESIDENCIALES.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'LkRK2L3GjC',
        nombre: 'COTORRA DE CABEZA OSCURA',
        nombreC: 'ARATINGA WEDDELLI',
        tipo: 'ave',
        imagen: [
          { id: '0', link: 'assets/img/144014031.jpg' },
          { id: '0', link: 'assets/img/144014041.jpg' },
          { id: '0', link: 'assets/img/144014051.jpg' },
          { id: '0', link: 'assets/img/Nanday_Parakeet_(Nandayus_nenday)_(27841278424).jpg' },
          { id: '0', link: 'assets/img/NandayConure-Jack.jpg' },
        ],
        coments: {
          descripcion: 'AVES DE COLA LARGA Y PICO FUERTE, PRESENTAN UN PLUMAJE CON COLORES VARIADOS ENTRE ELLOS LA GUACAMAYA AZUL ARA ARARAUNA, GUACAMAYO ROJO, ARA MACAO.',
          habitos: 'VIVEN EN BANDADAS QUE SUELEN SER NUMEROSAS, Y QUE SÓLO SE SEPARAN EN LA ÉPOCA DE CELO, O CUANDO ESTÁN BUSCANDO COMIDA, RECORREN GRANDES DISTANCIAS DURANTE SUS MAJESTUOSOS VUELOS. PONEN DE DOS A TRES HUEVOS POR NIDADA. SON MONÓGAMOS.',
          reproducion: '',
          alimentacion: 'FRUTAS, NUECES Y SEMILLAS, SON SU ALIMENTO PREDILECTO AUNQUE TAMBIÉN CONSUMEN ALGUNOS INSECTOS Y VEGETALES.',
          habitad: 'TRÓPICO AMERICANO. BOSQUES Y SELVAS SEPTENTRIONALES, LLANURAS CERCANAS A RÍOS Y ARROYOS. HABITAN LA ZONA ALTA DE LOS BOSQUES.'
        },
        locate: { lat: '', lng: '' }
      },
      {
        id: 'fEEfCet2Ek',
        nombre: 'LORITA PECHO PLOMO',
        nombreC: 'MYIOPSITTA MONACHUS',
        tipo: 'ave',
        imagen: [
          { id: '0', link: 'assets/img/Monk_Parakeet_(Myiopsitta_monachus)_(28420470712).jpg' },
          { id: '0', link: 'assets/img/monk-parakeet-54x_17b222.jpg' },
          { id: '0', link: 'assets/img/f8d093e8f93406f040ce67396395ce3f.jpg' },
          { id: '0', link: 'assets/img/9887cee2a3dab31ddeaaac42615f4d4f.jpg' },
        ],
        coments: {
          descripcion: 'EL PESO DE ESTA SUBESPECIE ES DE ENTRE 120 Y 140 G, Y SU LARGO TOTAL ES DE ENTRE 28 Y 31 CM. ES LA SUBESPECIE DE MAYOR TAMAÑO, CON EL PICO PROPORCIONALMENTE MÁS GRANDE. LA CABEZA NO POSEE TONO GRIS. EL VERDE DEL DORSO ES UNIFORME, PERO EN LA RABADILLA Y EL CUELLO ES MÁS BRILLANTE. EL GRIS DE LA FRENTE Y MEJILLAS TIENE UN TINTE AZULADO. EL VIENTRE ES SEPIA-AMARILLENTO, Y PASA A VERDE VIVO EN EL ABDOMEN. LAS REMERAS ALARES SON AZUL CLARO.',
          habitos: 'EL PESO DE ESTA SUBESPECIE ES DE ENTRE 120 Y 140 G, Y SU LARGO TOTAL ES DE ENTRE 28 Y 31 CM. ES LA SUBESPECIE DE MAYOR TAMAÑO, CON EL PICO PROPORCIONALMENTE MÁS GRANDE. LA CABEZA NO POSEE TONO GRIS. EL VERDE DEL DORSO ES UNIFORME, PERO EN LA RABADILLA Y EL CUELLO ES MÁS BRILLANTE. EL GRIS DE LA FRENTE Y MEJILLAS TIENE UN TINTE AZULADO. EL VIENTRE ES SEPIA-AMARILLENTO, Y PASA A VERDE VIVO EN EL ABDOMEN. LAS REMERAS ALARES SON AZUL CLARO.',
          reproducion: 'CONSTRUYE NIDOS COMUNALES DE RAMAS, CERRADOS Y VOLUMINOSOS, COLOCADOS EN COPAS DE ÁRBOLES, DONDE CADA PAREJA TIENE SU PROPIA CÁMARA DE NIDIFICACIÓN.',
          alimentacion: 'ES UNA ESPECIE PRINCIPALMENTE GRANÍVORA; EN LA NATURALEZA SE ALIMENTA DE SEMILLAS DE PLANTAS TANTO SILVESTRES COMO CULTIVADAS. ENTRE ESTAS ÚLTIMAS MUESTRA PREFERENCIA POR EL SORGO, EL MAÍZ Y EL ARROZ. TAMBIÉN CONSUME FRUTOS, FLORES, BROTES DE PLANTAS, ASÍ COMO INSECTOS ADULTOS Y SUS LARVAS. TAMBIÉN PUEDEN ALIMENTARSE DE LA GRASA DE ANIMALES MUERTOS.RNEN CAUTIVERIO ACEPTAN PAN, GALLETAS, HORTALIZAS, CARNE Y OTROS ALIMENTOS.',
          habitad: 'ES UNA ESPECIE PRINCIPALMENTE GRANÍVORA; EN LA NATURALEZA SE ALIMENTA DE SEMILLAS DE PLANTAS TANTO SILVESTRES COMO CULTIVADAS. ENTRE ESTAS ÚLTIMAS MUESTRA PREFERENCIA POR EL SORGO, EL MAÍZ Y EL ARROZ. TAMBIÉN CONSUME FRUTOS, FLORES, BROTES DE PLANTAS, ASÍ COMO INSECTOS ADULTOS Y SUS LARVAS. TAMBIÉN PUEDEN ALIMENTARSE DE LA GRASA DE ANIMALES MUERTOS.RNEN CAUTIVERIO ACEPTAN PAN, GALLETAS, HORTALIZAS, CARNE Y OTROS ALIMENTOS.'
        },
        locate: { lat: '', lng: '' }
      },

      {
        id: '7cHLglSVy2',
        nombre: 'loro cabeciazul',
        nombreC: 'PIONUS MENSTRUUS',
        tipo: 'ave',
        imagen: [
          { id: '0', link: 'assets/img/53402381.jpg' },
          { id: '0', link: 'assets/img/DSC08288.JPG' },
          { id: '0', link: 'assets/img/DSC08290.JPG' },
          { id: '0', link: 'assets/img/DSC08298.JPG' },
          { id: '0', link: 'assets/img/DSC08307.JPG' },
        ],
        coments: {
          descripcion: 'EN LOS ADULTOS LA CABEZA Y EL CUELLO SON PRINCIPALMENTE DE COLOR AZUL BRILLANTE, MEZCLADO CON ROJO ROSÁCEO EN LA GARGANTA, Y LA MANCHA AURICULAR ES NEGRA. EL PECHO ES VERDOSO OSCURO CON UN ESCAMADO AZUL Y EL ABDOMEN VERDE. ES VERDE MÁS OSCURO POR ENCIMA, CON LAS PRIMARIAS Y LAS TIMONERAS AZULES, EN GRAN PARTE, Y LAS COBERTERAS INFRACAUDALES Y EL VEXILO INTERNO DE LAS TIMONERAS ROJO ROSÁCEO. EL IRIS ES CAFÉ OSCURO. EL PICO, LA CERA Y EL ANILLO OCULAR SON DE COLOR NEGRUZCO, CON UNA MANCHA CUADRADA ROJIZA ROSÁCEA A CADA LADO DE LA MAXILA, LAS PATAS SON PARDUZCAS.',
          habitos: 'EN PAREJAS O BANDADAS PEQUEÑAS. FORRAJEA DISCRETAMENTE EN EL DOSEL. VUELO CONTINUO CON ALETEOS PROFUNDOS TÍPICO PARA EL GÉNERO.',
          reproducion: '',
          alimentacion: 'FRUTAS Y SEMILLAS DE UNA VARIEDAD AMPLIA DE ÁRBOLES.',
          habitad: 'BASTANTE COMÚN A COMÚN EN UNA VARIEDAD DE BOSQUES PRIMARIOS Y SECUNDARIOS SECOS A HIPERHÚMEDOS DE TIERRAS BAJAS EN EL NORTE Y ESTE Y LA LADERA ESTE DE LA PARTE NORTE DE LOS ANDES. RARO A POCO COMÚN EN BOSQUE DE GALERÍA E ISLAS DE BOSQUE GRANDES EN CERRADO/SABANA.'
        },
        locate: { lat: '', lng: '' }
      }
    ];
  }
  getAnimal() {
    return this.animal;
  }
  getAnimalId(id: string) {
    return {...this.animal.find(ani => {
        return ani.id === id;
      })
    };
  }
}

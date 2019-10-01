// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).

const Alexa = require('ask-sdk-core');

var num = 0;

//this are the words
//var dato = new Array(50);
//var dato1 = new Array(50);
var dato = ["Sabías que Los árboles cada vez crecen más rápido y mueren antes.",
    "Sabías que las jirafas tienen la lengua azul.", "Sabías que el pulpo tiene 3 corazones",
    "Sabías que Los ojos de los pingüinos funcionan mejor bajo el agua que en el aire",
    "Sabías que Los anfibios, como la rana, en su etapa larvaria respiran con las branquias y dependen del medio acuático.",
    "¿Sabías que los perros grandes viven menos que los pequeños?",
    "Sabías que En algunas zonas de la Tierra , principalmente en la Antártida , la capa de ozono se ha destruido, fenómeno conocido como agujero de la capa de ozono.",
    "¿Sabías que el calentamiento global no tiene fin?",
    "Sabías que los corales están en peligro a causa de que algunos océanos se están volviendo calientes",
    "Sabías que La erupción de un volcán puede transformar las condiciones de un ecosistema.",
    "Sabías que El efecto invernadero permite la vida en nuestro planeta",
    "¿sabías por qué las cebras tienen rayas? Según la sabiduría popular, gracias a sus rayas las cebras se camuflan entre la hierba alta, como una forma de escapar de los leones, que no distinguen colores.",
    "Sabías que A diferencia de la Tierra, la Luna no tiene placas tectónicas. En cambio, su actividad sísmica ocurre a medida que ha perdido calor lentamente tras su formación, hace 4 mil 500 millones de años.",
    "Sabías que el 9 millones de toneladas de residuos plásticos acaban cada año en el océano",
    "Sabías que Petricor: el olor de la lluvia. Cuando las gotas de lluvia impactan contra el suelo, se forman burbujas de aire. Estas burbujas atrapan partìculas de la tierra (aceites y químicos producidos por bacterias). Cuando las gotas de lluvia impactan contra el suelo, se forman burbujas de aire. Estas burbujas atrapan partìculas de la tierra (aceites y quìmicos producidos por bacterias)",
    "Sabías que el arcoiris, se produce cuando los rayos del sol atraviesan las pequeñas partículas de agua que hay suspendidas en la atmósfera, creando así un arco de colores en el cielo. Cuando un rayo es interceptado por una gota de agua, ésta lo descompone en los colores del espectro visible, y al mismo tiempo, lo desvía.",
    "Sabías que las plantas también sienten, aunque de manera distinta",
    "¿Sabías que el agua se expande a medida que se congela?",
    "Es increìble pero los humanos no pueden sentir sabor sin saliva",
    "Sabías que el el timol se emplea en la conservación de libros para combatir los hongos.", "Sabías que el tungsteno se usa como filamento en las bombillas.",
    "Sabías que el esmalte es la sustancia más dura del cuerpo humano.", "Sabías que en aguas contaminadas por detergentes las aves no pueden flotar.",
    "Sabías que aunque su nombre parece haber salido del infierno, las luciferinas son moléculas más reales y comunes de lo que usted creería, son una clase de compuestos orgánicos empleados en la obtención de luz en organismos bioluminiscentes. bacterias, hongos y algunos tipos de insectos.",
    "Es más difícil quitar el jabón cuando el agua está más fría, que a temperatura ambiente o tibia.", "El helio es menos denso que el aire, (unas 7 veces), por lo que ofrece menos resistencia a la vibración.",
    "La  química y las cebollas. Las terminaciones nerviosas en los ojos son muy sensibles y detectan la irritación al cortar cebolla.",
    "Algunos lápices labiales contienen acetato de plomo o azúcar de plomo",
    "¿Por qué se ponen negros los plátanos en la nevera? Los plátanos son frutas tropicales, adaptados a países con mucho sol y mucho calor. Todo lo contrario que un frigorífico.",
    "¿Por qué la carne roja es más oscura en unas ocasiones que en otras? Luego de exponerse al aire por un período de alrededor 15 minutos, la mioglobina recibe oxígeno y la carne se vuelve de color rojo cereza vivo.",
    "¿Microorganismos en la miel? La miel es principalmente azúcar. Y los azúcares son higroscópicos, es decir que tienen muy poca agua.",
    "Sabías que el gas doméstico es un gas incoloro e inodoro, ¿Como es que lo podemos oler?",
    "El hidrógeno es el gas más abundante del universo y uno de los elementos más importantes para la vida.",
    "Sabías que Para el año 1900, todo el conocimiento científico de la humanidad podía guardarse en un total de 80 libros.",
    "Sabías que El matemático francés François Viéte fue el primero en utilizar las letras para representar las incógnitas que tenían en sus ecuaciones.",
    "Los mayas inventaron un sistema de numeración como un instrumento para medir el tiempo y no para hacer cálculos matemáticos.", "Sabías que las matemáticas, y la estadística, aseguran que, En una reunión de 23 personas escogidas aleatoriamente, la probabilidad de que dos de ellas cumplan los años el mismo día del mismo mes es de 0.557 es decir, hay un 50.7% de posibilidades de que haya dos personas que cumplan los años el mismo día del mismo mes.",
    "Sabías que el número 2520 es considerado un número perfecto por los matemáticos", "Los genios babilonios que se dedicaban a las matemáticas iban a contracorriente.", "sabías que La multiplicación era considerada muy difícil hasta el siglo XVI.",
    "sabías que Carl Friedrich Gauss 1777-1855 es considerado uno de los mejores matemáticos de la historia.",
    "sabías que Mohammed ibn-Musa Al-Jwarizmi 780-846, matemático árabe, trabajó en la biblioteca del califa Al-Mahmun en Bagdad. De su nombre deriva la palabra algoritmo.",
    "sabías que La palabra cero deriva probablemente de, zephirum.", "El sistema de numeración maya es considerado como uno bastante completo matemáticamente. Al tratarse de una civilización con altos conocimientos de las astronomía y calendarios, tenían necesidad de un símbolo que representara la nada. Por esta razón es que, mucho antes de la colonización, los mayas crearon el cero que se adaptó a sus necesidades.",
    "sabías que La geometría (medición de tierra) se inició, como ciencia, en el antiguo Egipto.", "sabías que el número 1,618 es llamado el número áureo o proporción áurea y se le considera el número más bonito porque es una proporción que aparece muchas veces en la naturaleza.",
    "El cero tal y como lo conocemos nosotros fue inventado en la India y llegó a Europa a través de los árabes. La palabra cero proviene del árabe sifr, que significa vacía.",
    "sabías que Las dos rayas del símbolo igual que indican igualdad las empezó a utilizar un matemático inglés llamado Robert Recorde que vivió hace más de cuatrocientos años.", "¿Sabes quién invento el ábaco?... El primer dispositivo de este tipo se cree que fue inventado por los mesopotámicos",
    "¿Que había antes de la calculadora electrónica? En el pasado, se utilizaban como apoyo al trabajo numérico ábacos, comptómetros, ábacos neperianos, tablas matemáticas, reglas de cálculo y máquinas de sumar. El término calculador se usaba para aludir a la persona que ejercía este trabajo, ayudándose también de papel y lápiz.", "La pascalina fue la primera calculadora que funcionaba a base de ruedas y engranajes, inventada en 1642 por el filósofo y matemático francés Blaise Pascal (1623-1662). El primer nombre que le dio a su invención fue máquina de aritmética. Luego la llamó rueda pascalina, y finalmente pascalina. Este invento es el antepasado remoto del actual ordenador.",
    "¿Antidepresivos en la nevera? La ciencia estudia cómo afecta la dieta a la salud mental.", "Cada 2 segundos, alguien de entre 30 y 70 años de edad muere prematuramente a causa de enfermedades no transmisibles: enfermedad cardiovascular o respiratoria crónica, diabetes o cáncer.", "¿Has escuchado hablar de la medicina personalizada? Será el futuro tratamiento del cáncer.", "Sabías que hacer ejercicio mejora la salud mental",
    "¿Sabías que es posible morir si bebes mucha agua?", "sabías que la lengua escaldada es a causa de la maldad de la piña. No importa qué tan dulce o tan ácida sea, en algún punto te escaldará la lengua. La piña, además de ser muy rica en vitamina C y en fibra, posee un alto contenido de bromelina, una proteína que cataliza el metabolismo de los alimentos.",
    "Sabías que el año pasado estuvo lleno de descubrimientos científicos que podrían marcar un antes y después en la vida del ser humano", "Si Casualmente has decidido tomar un largo baño en el jacuzzi o has pasado los últimos 3 días de tus vacaciones de playa en el mar. Pues bien, notarás que después de algunas horas, tu piel, principalmente la de la palma de los dedos, se ha vuelto muy arrugada, como una pasita. ¿qué es lo que pasa? Tomemos en cuenta que la piel posee diferentes capas y que cada nivel posee un grosor y una composición química y molecular particular. Aunque las capas de la piel se encuentran pegadas una de otras, siempre hay un ligero espacio entre una y otra.",
    "Sabías que si una cabeza humana fuera arrancada de su cuerpo duraría algunos segundos conscientes", "Hace muchos años la esperanza de vida era muy baja , sobrevivir era, en gran medida, una cuestión de suerte.",
    "Sabías que la nuez moscada es una semilla ampliamente utilizada para dar sabor y aroma a postres y salsas, sin embargo, su aceite esencial posee miristicina que es el componente causante de síntomas neuronales graves, que van desde dolor de cabeza hasta convulsiones y reacciones de pánico.", "El día de hoy los humanos solo pueden ver alrededor del 5% de la materia del universo.", "¿Sabías que en este preciso momento tu cuerpo está siendo atravesado por mil billones de neutrinos?",
    "A que no sabías que Nuestra galaxia tiene la forma de un disco, con una zona central gruesa y una gran nube de forma esférica, llamada halo, de estrellas viejas rodeando al disco.", "El primer ser vivo que orbitó la Tierra fue la perrita Laika, que en ruso significa: que ladra", "La montaña más alta del sistema es el monte Olimpus, en Marte, alcanza los 24 km de alto.", "A que no sabías que Las Leónidas del 13 de noviembre de 1833, cuando se contabilizaron hasta 200.000 meteoros por hora.",
    "sabías que Se estima que cada hora caen en la Tierra 60 meteoritos, 1.440 por día, 10.080 cada semana, 43.200 al mes y 525.600 cada año.", "El meteorito Hoha, en Namibia, de unas 60 toneladas, un peso similar al de 9 elefantes.", "sabías que Actualmente la galaxia más cercana a la tierra es la galaxia enana de Can Mayor. Esta galaxia está a 25.000 años luz del Sistema Solar y a 42.000 años luz del centro de la Vía Láctea.", "Sabías que los componentes del universo son 30% materia oscura , 4% hidrógeno y helio , 0.5% estrellas , 0.3% neutrinos , 0.03% elementos pesados y 65% energía oscura.",
    "Galileo Galilei no fue el inventor del telescopio. El verdadero creador fue Hans Lippershey (1570, Wessel, Alemania), un fabricante de lentes.", "Considerados los astros más luminosos del universo, los quasars nacen de la colisión de dos galaxias, como han confirmado las últimas imágenes enviadas por el telescopio espacial Hubble.", "Si todas las estrellas de la Vía Láctea tuvieran nombre, se necesitan 4.000 años para decirlos todos.", "sabías que Un día sideral o sidéreoes el tiempo que tarda la Tierra en dar una vuelta sobre su propio eje, independientemente de la posición del Sol.",
    "Saturno es el planeta conocido por sus anillos, formados por infinidad de pequeñas partículas heladas que giran como pequeñas lunas alrededor del planeta en el mismo plano con trayectorias casi circulares.",
    "Para viajar a Andrómeda, la galaxia más cercana a la nuestra, necesitarías 2.400.000 años, en una nave que viajará a la velocidad de la luz algo menos de 300.000 Km entre sg.",
    "A veces vemos la Luna de color amarillo, anaranjado e incluso rojizo, sobre todo cuando está cerca del horizonte.",
    "Xóchitl Guadalupe Cruz López, la niña de 8 años que hizo un calentador solar para su casa y en 2018 ganó el premio en el instituto de ciencias nuclear.",
    "Sabias que el equipo compuesto por Alejandra Ponce, Edgardo Castillo y José Julián Castañeda, de PrepaTec Morelia y Bárbara Ayala, de la Universidad Latina de América, y la profesora Viridiana Reyes, del Colegio México Nuevo de Morelia ganaron un concurso llamado Ciencia en Acción 2018 en Barcelona, España, gracias a su proyecto de mejora del proceso productivo en el cultivo del maíz ya que crearon un Biofertilizante de deshidratado orgánico y residuos de celulosa para la mejora de las condiciones de germinación y crecimiento del maíz: Bio-Celorganic, pues el jurado considero  que era un trabajo con proyección de futuro, adecuado al entorno y responsable con el medioambiente.",
    "El doctor Jorge Flores Valdés, investigador del Instituto de Física de la Universidad Nacional Autónoma de México (UNAM) recibió  en octubre del 2017 la Medalla ‘International Union of Pure and Applied Physics (IUPAP)en Sao Paulo, Brasil por el enorme impulso que le ha dado a la divulgación de la ciencia, en especial de la Física y su importante labor en los campos de investigación, enseñanza, divulgación y política científica y educativa.",
    "Ximena Valles Novoa y Manuel Alejandro Cardoso Duarte, integrantes del club de robótica MekLab de la Universidad Autónoma de Querétaro triunfaron en el concurso internacional RobotChallengue 2017 que se llevó a cabo en Beijing, China, ganaron en la división Misión Desconocida, misma que es considerada la más complicada, ya que en el momento de la competencia se les asigna un modelo de robot y las tareas que debe ejecutar.",
    "Evangelina Villegas desarrollo una inovación gracia a la cual se puede obtener un maíz que combata la malnutrición de niños y adultos alrededor del globo. Pues concluyo que la proteína de maíz de alta calidad (QPM) contiene el doble de proteínas aprovechables por los seres humanos que el maíz tradicional. Además de que produce 10% más grano. El maíz es el alimento básico de gran parte de los países más pobres del mundo.  alrededor del globo.",
    "Luis Ernesto Miramontes Cárdenas es reconocido como el creador de la pildora anticonceptiva, que de entre todas las contribuciones mexicanas a la ciencia mundial destaca en primer lugar, por su impacto social, el trabajo realizado sobre la síntesis  y producción de esteroides en la década de los años cincuenta.",
    "José Mario Molina Pasquél y Henríquez es un ingeniero químico mexicano destacado por ser uno de los descubridores de las causas del agujero de ozono antártico y ganador del premio novel de química en 1995, un gran galardón ya que solo 3 mexicanos en la historia lo han conseguido.",
    "El Proyecto GNOME es un entorno gráfico de escritorio para sistemas Linux. Su eficiencia, simplicidad y accesibilidad lo hacen uno de los sistemas más populares para la plataforma. Gracias a su flexibilidad y sencillez, ha hecho de sus creadores, los mexicanos Miguel de Icaza y Federico Mena, una especie de celebridades en el mundo del software libre.",
    "Karla Itzel Vázquez Santillán fue una de las cinco mexicanas que recibieron el premio L'Oréal-Unesco a Mujeres en la Ciencia 2018. La investigadora del Instituto Nacional de Medicina Genómica (Inmegen) fue distinguida por su trabajo que busca un tratamiento farmacológico que inhiba las células troncales del cáncer y reduzca las probabilidades de que un tumor resurja después de que es tratado con quimioterapia o radioterapia.",
    "El 14 de agosto de 2015, Silvia Torres-Peimbert hizo historia. Otra vez. No sólo fue la primera doctora en astronomía de México, sino que fue la primera mexicana en presidir la Unión Astronómica Internacional, una organismo con sede en París, Francia que agrupa a más de 11,000 especialistas de 90 países",
    "Sabias que en 1963 la química bióloga parasitóloga, Luz María del Castillo Fregoso, integrante de la primera generación del programa de Doctorado en Bioquímica de la Escuela Nacional de Ciencias Biológicas del #IPN (ENCB), obtuvo el grado defendiendo la tesis: Investigaciones acerca de la desnaturalización de proteínas por agentes con actividad superficial.",
    "Olga Medrano Martín del Campo. En 2016 saltó a la fama por obtener el primer lugar en dos importantes competiciones de matemáticas a nivel internacional a la edad de 17 años: la Olimpiada Europea Femenil de Matemáticas y el Romanian Master of Mathematics. Por su notable desempeño, el Instituto Tecnológico de Masachussetts (MIT, por sus siglas en inglés) le otorgó una beca para que realice ahí sus estudios universitarios de matemáticas, que es a lo que se dedica actualmente",
    "Dafne Almazán es la primer mexicana en llegar a Harvard a la edad de 17 años, cursando la maestría en matemáticas,  no sólo es la primer mexicana menor de edad en ingresar a la prestigiosa Universidad, también es la primer menor de edad admitida en 100 años.",
    "Daniel Marín Quiroz, es dos veces ganador de la Olimpiada Nacional de Física y tercer lugar en la Olimpiada Internacional de Física 2018, este estudiante mexicano fue aceptado en nueve de las más prestigiosas universidades privadas de Estados Unidos"
];

var dato1 = ["Según avanza el cambio climático, los bosques pierden su capacidad de almacenar carbono a largo plazo.",
    "¡Sí!, azul. Las lenguas de las jirafas son de color azul oscuro, y tienen una longitud de aproximadamente 20 pulgadas. Esto les permite buscar las hojas más altas y jugosas de los árboles de acacia.",
    "¡Así es! Se usan dos de ellos para bombear sangre a cada uno de sus pulmones y el tercero bombea sangre a todo el cuerpo.", "Esto les permite una vista superior para detectar a sus presas mientras cazan, incluso en aguas oscuras o turbias.",
    "Mientras que en su etapa adulta respiran con pulmones y ya no dependen del medio acuático… Otra característica curiosa de los anfibios es que son los únicos vertebrados capaces de vivir en la tierra y en el agua que nacen en estado larvario. Es decir, cuando los pequeños salen del huevecillo, la forma de su cuerpo es diferente de la que tendrán al hacerse adultos.", "En el reino animal, el tamaño suele equivaler a longevidad: elefantes y ballenas pueden vivir unos 70 años; un ratón común, dos. En el mundo de los perros pasa lo contrario. La culpa podría ser de los radicales libres, Los radicales libres del oxígeno surgen como un desecho del proceso por el que las células obtienen energía de los alimentos.",
    "Los principales responsables de la destrucción de la capa de ozono son los aviones supersónicos y la emisión de sustancias como el óxido de nitroso que liberan los fertilizantes nitrogenados, los freones presentes en la maquinaria de refrigeradores y aires acondicionados, los gases producidos por explosiones nucleares.", "De acuerdo con una investigación, publicada por la revista Proceedings of the National Academy of Sciences, sin una notable intervención que reduzca las emisiones, el calentamiento global entrará en un peligroso bucle de retroalimentación.",
    "En concreto, si el aumento global de la temperatura fuera mayor de 2 grados Celsius, el nivel del mar incrementa hasta niveles nunca vistos desde el Holoceno. Asimismo, el termómetro alcanzaría los valores más altos de los últimos 1,2 millones de años.",
    "Segun los investigadores una erupción volcánica arroja ceniza rica en minerales en el área que la rodea, gracias a esto las plantas pueden volver a crecer con relativa rapidez. Durante la erupción libera pedazos de roca, tales como, potolivine, piroxeno, anfíbol, feldespato, que a su vez son ricas en hierro, magnesio, y potasio. Como resultado, las regiones que tienen grandes depósitos de tierra volcánica (es decir, laderas de montañas y valles cerca de los sitios de erupción) son muy fértiles.",
    "El efecto invernadero es de gran ayuda pero el aumento excesivo de la temperatura puede tener consecuencias muy serias como por ejemplo que actualmente los glaciares se están derritiendo", "Sin embargo,  la hipótesis más sólida sobre por qué las cebras tienen rayas en el cuerpo es que, de este modo, se evitaba la picadura de moscas tábidas y otros parásitos que chupan la sangre.",
    "Como resultado, la Luna se ha vuelto alrededor de 50 metros en los últimos 100 millones de años.", "La isla de plástico del océano Pacífico, localizada entre California y Hawáii, ocupa una extensión de 1,6 millones de kilómetros  cuadrados. Y no para de crecer a una velocidad alarmante. Mediante varios buques y aeronaves los científicos estimaron la cantidad de residuos acumulados. Por desgracia, la cifra resultó mucho mayor, entre 4 y 16 veces, de lo esperado. Es decir, unas 79.000 toneladas de redes de pesca, microplásticos y otras piezas de este material. La revista Scientific Reports publicó la investigación.",
    "Las burbujas efervescen como champaña y esparcen las partìculas en el ambiente.El conjunto de partìculases lo que produce ese olor llamado petricor como lo conoces tu: tierra mojada.",
    "Dicho de otro modo: el rayo de luz solar es refractado tanto al entrar en la gota como al salir. Es uno de los más bellos espectáculos de la naturaleza. Este fenómeno es uno de los más interesantes, más teniendo en cuenta de que sólo se producen en Venus y aquí, en el planeta Tierra.",
    "Pese a que carecen de un sistema nervioso, cuando una planta es mordida por un insecto, esta reacciona de la misma forma en que lo haría un animal, utilizando las mismas moléculas. Además, esa reacción al dolor tiene como función activar un sistema de defensa, que propaga y comparte el dolor con otras plantas. Otro ejemplo, es que a las plantas les gustan la música y se comunican con sus congéneres por medio de sustancias químicas", "Un cubo de hielo ocupa aproximadamente un 9% más de volumen que el agua utilizada para fabricarlo.",
    "Los quimiorreceptores de las papilas gustativas de la lengua requieren de por medio un líquido para que los sabores se unan a las moléculas receptoras. Si no existe líquido, no habrá resultado.", "El timol está presente en la naturaleza en el tomillo y el orégano, dos hierbas aromáticas muy usadas para cocinar.", "Su nombre deriva del sueco tung sten, que significa: piedra pesada. En cuanto a los tubos de neón, el nombre de este elemento empezó a usarse en Nueva York y significa: nuevo.",
    "Tomando en cuenta que el ser humano posee 32 piezas dentales y mudó 20 dientes de leche en toda su vida; se sabe que la sustancia con mayor dureza en todo el organismo humano es el esmalte dental, mismo que se compone principalmente por Fosfato de Calcio Cristalino. Posicionándose con un valor de 5 en la escala de Mohs en términos de dureza.",
    "Curiosamente la mayoría de detergentes poseen en su composición agentes ablandadores del agua tales como el Bórax, estos actúan sobre las moléculas del agua variando la relación de sus componente, haciéndola más blanda y por tanto perdiendo su natural resistencia al rompimiento entre moléculas hidrofóbicas e hidrofílicas haciendo que el plumaje de aves normalmente impermeable rompa la resistencia natural del agua. Lo que en definitiva es un grave riesgo para los ecosistemas.",
    "Dicha luz se obtiene mediante procesos catalíticos de la enzima luciferasa reaccionado con el oxígeno en efecto la mayoría de los grupos funcionales removidos de la luciferina liberan energía en forma de luz.", "Ya  que el Jabón es la sal de sodio de un ácido carbóxilico. Debido a esto la solubilidad de la sal es directamente proporcional a la temperatura, es decir a mayor temperatura del agua, mayor solubilidad del jabón en el agua.",
    "Como resultado las cuerdas vocales vibran con mayor rapidez y las ondas sonoras se desplazan con mayor velocidad ofreciendo unas notas más agudas, dando como resultado que tu voz suena muy graciosa.", "Entonces el cerebro reacciona diciéndole a los conductos lacrimales de tus ojos que produzcan más agua, es decir lágrimas, para diluir el ácido y proteger así  los ojos.",
    "El azúcar de plomo o acetato de plomo son compuestos tóxicos que hacen que el labial tenga un sabor más dulce.",
    "Si metes un plátano dentro de una nevera, las membranas de las células de su piel se rompen liberando una enzima (polifenoloxidasa) que reacciona formando sustancias de color marrón muy oscuro.",
    "El oscurecimiento se debe a la oxidación, a los cambios químicos en la mioglobina, debido al contenido de oxígeno. Este es un cambio normal durante el período de refrigeración.",
    "Son muy pocos los organismos que pueden vivir en hábitats exentos de agua, por lo tanto, en la miel es difícil que pueda sobrevivir algún microorganismo.",
    "En su elaboración se le añade un odorizante que le confiere olor desagradable. Esto le permite ser detectado en una fuga porque es altamente volátil y puede provocar una explosión.", "Está formado por un protón y un electrón, siendo el elemento químico más simple. Se suele encontrar en forma de gas hidrógeno (H2), estando en las estrellas y planetas gaseosos.",
    "Sabías que Hoy en día, las matemáticas se han desarrollado mucho más y con los nuevos aportes, se necesitan 100.000 libros para la misma tarea.", "Una manera muy práctica de hacer ver que allí debía haber un número, aunque en realidad no había nada más que una pregunta que, en ese momento, no tenía solución.",
    "Por eso, los números mayas tienen que ver con los días, meses y años, y con la manera en que organizaban el calendario. En la numeración maya solo había tres símbolos para representar los números, aunque estas formas podían variar según el uso: algunas eran para los monumentos, otras para los códices y otras eran representaciones humanas.",
    "El resultado no es una paradoja matemática, es algo comprobable (además fácilmente) matemáticamente. El calificativo de paradoja le viene por lo contrario que parece a la intuición.", "El número 2520 es considerado perfecto ya que se puede ser dividido de manera exacta por los números del 1 al 10.", "De hecho, el sistema en el que se basaban todas sus investigaciones era en base 60 en lugar de base 10 que la mayoría conocemos. Por esta razón un minuto tiene actualmente 60 segundos.",
    "Durante el siglo XVI, la multiplicación era considerada la operación matemática más difícil y compleja de todas. Por este motivo, solo los alumnos universitarios adquirían dicho conocimiento.", "En 1784 , cuando cursaba el segundo grado , la maestra de su grupo para tenerlo callado le pidió calcular la suma de los primeros 100 números naturales. Gauss respondió de inmediato.", "Es el autor del trabajo Al-jabr wa´l muqäbala , del cual procede la palabra álgebra. Introdujo en occidente el sistema hindú de numeración decimal, que explicó con todo detalle en su obra Aritmética.",
    "forma latinizada del árabe sifr que es, a su vez, una traducción de la palabra hindú sunya que significa vacío o nada.", "El origen de los números se remonta a 3,500 años antes de Cristo aproximadamente, específicamente en Mesopotamia. Sin embargo, se conoce que fue 400 años a. C. aproximadamente cuando los escribas babilonios concibieron un signo que representaba el vacío, es decir, la ausencia de número. La práctica de utilizar dicho símbolo se expandió por Europa. Pero los mayas, ubicados en un continente incomunicado a los demás, descubrieron el uso del cero por sus propios medios.",
    "y en Babilonia por la necesidad de realizar mediciones terrestres. La geometría es quizás la aplicación más importante de la matemática egipcia, debido a la necesidad de los agrimensores o tensadores de cuerda, como los llamó Heródoto, para recalcular las lindes de los campos tras la inundación anual del Nilo.", "Se ve en conchas, huracanes, ramas de los árboles, galaxias, y hasta en la molécula de ADN. De hecho, se ha utilizado a lo largo de la historia para crear diseños estéticamente agradables y obras de arte",
    "En el año 650, en la India, ya era habitual su uso. La tablilla encontrada en Gwalior, al sur de Delhi, data del año 876. Los números son muy similares a los usados actualmente, salvo porque los ceros eran un poco más pequeños y se encontraban alzados, según recoge Clifford A. Pickover en El libro de las matemáticas.",
    "En uno de sus libros cuenta que eligió ese signo porque dos cosas no pueden ser más iguales que dos rectas paralelas", "El nombre de una persona específica nunca ha sido acreditado con la invención del ábaco, pero se cree que fue inventado por los mesopotámicos antiguos durante el 2700-2300 antes de Cristo. Hay una creencia común que los chinos inventaron el ábaco, pero el primer Ábaco chino fue inventado para el 500 aC y se desarrolló aún más, o se hizo famoso su uso, durante la Edad Media de China, durante la dinastía Ming (1368-1644).",
    "Las calculadoras electrónicas de mediados de los años 1960 eran grandes y pesadas máquinas de escritorio debido al uso de cientos de transistores en varias placas de circuitos, con un elevado consumo eléctrico que exigía el uso de una alimentación alterna.", "En 1642, a los 19 años, Pascal concibió la idea de la pascalina con el fin de facilitar la tarea de su padre, que acababa de ser nombrado superintendente de la Alta Normandía por el cardenal Richelieu, y que debía restaurar el orden de los ingresos fiscales de esta provincia. Este invento permitía sumar y restar dos números de manera directa y hacer la multiplicación y división por repetición.",
    "Los alimentos no son medicinas, pero una nutrición equilibrada puede disminuir la probabilidad de sufrir males como la ansiedad y la depresión.", 
    "En los 8 segundos que pasaron 4 personas murieron a causa de una enfermedad no transmisible, el programa de las naciones unidas para el desarrollo tiene la meta para 2030, de reducir en un tercio la mortalidad prematura por enfermedades no transmisibles mediante la prevención y el tratamiento y promover la salud mental y el bienestar.", "En el año 2017 la medicina personalizada cobró relevancia en el tratamiento del cáncer. En septiembre, la Agencia de Alimentos y Fármacos de Estados Unidos aprobó una innovadora terapia contra la leucemia que supone un cambio de paradigma en el tratamiento del cáncer, la terapia con células CAR-T.",
    "En el estudio participaron más de un millón de estadounidenses mayores de 18 años. Tras considerar el tipo de ejercicio, la duración, la frecuencia y la intensidad, además de otros factores como el sexo, la etnia o el nivel educativo, los científicos concluyeron que la actividad física mejoraba un 43,2 por ciento la salud mental. El efecto más notable se observó en deportes de equipo, ciclismo y actividades aeróbicas realizados durante 45 minutos entre 3 y 5 veces por semana. La revista The Lancet Psychiatry publicó el hallazgo.",
    "La intoxicación hídrica o la Hiponatremia se producen cuando una persona deshidratada bebe demasiada agua sin los electrolitos que la acompañan.", "Esta enzima funciona similar a la pepsina presente como jugo gástrico en el estómago y que rompe proteínas, sí, las proteínas que tenemos en la lengua, causando esa incómoda sensación. De forma maquiavélica, podríamos decir que al tiempo que comemos la piña, la piña nos come a nosotros.",
    "Un ejemplo de ello es el caso del trabajo llevado a cabo por He Jiankui, genetista responsable de modificar el ADN de dos niñas para hacerlas resistentes al VIH, trabajo catalogado como responsable de ‘abrir la caja de pandora en el sector médico.", "La piel que se encuentra en la palma de las manos y de los pies es ligeramente más gruesa que en las otras partes del cuerpo, esto básicamente por el uso rudo que le damos, entonces, estas partes del cuerpo, al hidratarse, favorecen que la dermis y la epidermis se separen un poco más. La epidermis al ser una capa más gruesa pero porosa por naturaleza, absorbe el agua y se hincha, formando surcos y dándole ese toque de Cordillera a nuestra piel",
    "La cabeza tiene la distinción del albergar el cerebro, que es el asiento de la conciencia. En una decapitación limpia, el cerebro puede continuar funcionando hasta que la falta de oxígeno cause pérdida del conocimiento y la muerte", "Actualmente los continuos avances científicos y tecnológicos en el área de la salud han aumentado rápidamente la esperanza de vida de la población, modificando esta situación", "Lo que lo hace comestible es la pequeña dosis en la que es utilizado normalmente y a que se utiliza la cáscara y no el núcleo de la semilla, donde se encuentra el contenido concentrado del aceite", "Mientras que en su etapa adulta respiran con pulmones y ya no dependen del medio acuático.",
    "Los neutrinos son partículas muy, muy pequeñas, como los electrones, que se mueven casi a la velocidad de la luz, y no interaccionan casi con nada en el universo. De hecho, si no se las necesitase para explicar la desintegración del neutrón, podríamos prescindir de ellas.", "Se sabe que existe materia formada por hidrógeno en forma de moléculas que no se observa en radiación visible. Esta nube de hidrógeno rodea a toda la galaxia, al disco y el halo juntos, aunque no de forma homogénea.",
    "Fue el 3 de noviembre de 1957 a bordo de la nave soviética Sputnik 2. Tras Laika, la URSS envió al espacio 12 perros, de los que sólo cinco llegaron vivos de vuelta a la Tierra.", "El pico oficialmente más alto de la Tierra es el monte Everest, que llega hasta los 8,8 km por encima del nivel medio del mar.", "Los espectadores dijeron que los meteoritos parecían copos de nieve, aunque muchos pensaron que había llegado el fin del mundo.", "La mayor parte de ellos se queman completamente al entrar en nuestra atmósfera y son imperceptibles.",
    "Fue descubierto en 1920, este meteorito de 3 m de largo continúa donde cayó. Originariamente era aún más grande ya que parte del meteorito ha sufrido la erosión.",
    "Es la actual poseedora de este récord, pero se descubren nuevas galaxias elípticas enanas cada año y quizá ya se haya descubierto una aún más cercana.",
    "Las estrellas, los asteroides, los planetas, el polvo cósmico, los elusivos neutrinos, el helio, el hidrógeno y todo lo que podemos ver a nuestro alrededor conforman una mínima parte de lo que es el universo. El 95% restante está ocupado por la extraña materia oscura y la aún más incomprensible la energía oscura.",
    "Al parecer, Galileo fue el primero en utilizar un telescopio y por eso se le atribuyó erróneamente su invención.", "los quasars se alimentan por la energía que se desprende del violento encontronazo y del material galáctico circundante, y crecen de la nueva galaxia hasta convertirse en un objeto celeste tan brillante que puede ser detectado a distancias superiores a 10.000 millones de años luz.",
    "suponiendo que se pronunciara el nombre de las estrellas uno por segundo sin detenerse.",
    "El día sideral dura 23 h. 56 min. aproximadamente, y es más corto que el día solar debido a que la Tierra gira alrededor del Sol. La Tierra da una vuelta (360º) al Sol en poco más de 360 días 365.2 días más exactamente, por lo que recorre un poco menos de 1º al día.",
    "Sus anillos pueden verse desde la Tierra no a simple vista, naturalmente. Igual que la órbita de la Luna está inclinada con respecto a la órbita de la Tierra, los anillos de Saturno giran en una órbita inclinada 26,7º con respecto a la órbita del planeta. Además, Saturno y la Tierra giran en el mismo plano la eclíptica y en sentido contrario por lo que desde la Tierra se puede ver a Saturno en distintas posiciones que varían desde su cara Norte, desde su cara Sur y de perfil. En esta última posición casi no se aprecian los anillos y ocurre cada 15 años. Los anillos de Saturno tienen un espesor aproximado de unos 100 metros.",
    "eso significa, que esta galaxia vecina está a 2.4 millones de años luz. Esta galaxia también llamada M31 es posiblemente el objeto celeste más lejano visible a simple vista por el ojo humano.",
    "Esto se debe a que el vapor de agua y el polvo en suspensión de la atmósfera favorecen que la luz más rojiza llegue a nosotros, dispersando las otras longitudes de onda.",
    "Xóchitl se convirtió en la primera niña en recibir este reconocimiento por parte del Instituto. Ella es originaria de la Zona de los Altos de Chiapas y quien apenas cursa el tercer grado de primaria en la escuela Josefa Ortiz de Domínguez, detalló que el calentador consiste en dos puertas de cristal, mangueras de salida que conectan con todos los botes, una que comunica con el tinaco y botellas.",
    "Los estudiantes comenzaron a trabajar en su proyecto desde noviembre del 2017, al ganar el concurso Encuentro de la fraternidad realizado nacionalmente en diferentes secundarias. Ellos tras este reconocimiento tomaron la decisión de participar en el concurso que se organiza en octubre en Barcelona, con el cual obtuvieron el primer lugar internacional.",
    "El doctor Jorge Flores Valdés hoy en día es miembro del Comité de Ciencias Físicas, Químicas y Matemáticas y dirigió la conceptualización, diseño, construcción y operación del Museo de las Ciencias Universum, en Ciudad Universitaria, el primer museo en México dedicado a promover la ciencia y tecnología al público dentro del ámbito universitario pionero en su tipo en latinoamérica. Además recibió el premio de Ciencias Exactas de la Academia Mexicana de Ciencias; el Premio Universidad Nacional en Investigación en Ciencias Exactas, y el Premio Nacional de Ciencias y Artes. En 1992, recibió el premio Kalinga de Divulgación Científica, que otorga anualmente la UNESCO",
    "En la categoría Misión desconocida en la que ganaron los equipos no saben nada, están con el material, la computadora y ahí se les asigna la misión que el robot debe cumplir. En su caso, les pidieron un robot clasificador 3 e identificar objetos específicos que debía arrojar fuera de ella”",
    "Esta bioquímica era una de esas investigadoras que consiguió mejorar la vida de millones de personas gracias a la ciencia. Lo hizo desarrollando la proteína de maíz de alta calidad (QPM). Ciencia contra la desnutrición y con ello recibió el Premio Mundial de Alimentación en 2000, no fue el único reconocimiento que recibió: fue nombrada Mujer del Año por la Asociación Mexicana de Mujeres (2000) o “Alumna Destacada” por la Kansas State University, donde además crearon un premio con su nombre.",
    "Luis Ernesto Miramontes es el único mexicano en el US Inventor’s Hall of Fame, al lado de inventores tales como Pasteur o Edison. En una encuesta realizada por el Engineering and Technology Board (ETB), que reúne a todo el sector de las ingenierías en la Gran Bretaña, la píldora anticonceptiva fue ubicada como el invento número 20 de todos los inventos más importante jamás ideados por la humanidad. Es el única aportación en toda la historia de la ciencia mexicana que haya recibido un reconocimiento similar ",
    "Por su labor y contribución a la Ciencia ha recibido numerosos galardones, incluyendo más de 40 doctorados Honoris Causa, el Premio Tyler de Energía y Ecología en 1983, el Premio Sasakawa de las Naciones Unidas en 1999, el Premio Nobel de Química en 1995, el Premio Campeones de la Tierra que otorga Naciones Unidas y es el primer mexicano en recibir la Medalla Presidencial de la Libertad de Estados Unidos.",
    "El proyecto GNOME nace como una alternativa al entorno KDE, y su nombre deriva del proyecto GNU y las siglas Network Object Model Environment (Entorno de Modelo de Objeto de Red GNU), debutando de forma oficial en 1999 gracias a la idea de dos estudiantes de la UNAM interesados en el software libre, es un claro ejemplo en el entre desarrolladores, el entorno de escritorio que se encuentra presenta en varias distribuciones importantes, además de ser un favorito de los usuarios",
    "ES importante encontrar una terapia dirigida a evitar que las células troncales se multipliquen y produzcan más células tumorales, ya que una célula troncal tiene ciertas moléculas en su membrana que le permiten expulsar las sustancias dañinas, es por esto que son capaces de expeler de su interior los fármacos que se dan a un paciente durante la quimioterapia y sobrevivir a esta. Además, una célula troncal tiene mecanismos de reparación del ADN, lo que le facilita sobrevivir a las terapias con radiaciones.",
    "La científica Silvia Torres-Peimbert considera que el principal cambio debe ocurrir en las familias y en las escuelas, modificar la percepción que se tiene de la física, la química o las matemáticas, generalmente catalogadas como las materias más difíciles: Eso es lo que nos hacen creer todos y creo que parte del problema es que los maestros mismos no se sienten a gusto, no se sienten contentos frente a la ciencia en general” pues la tasa de cientificos no ha crecido lo que se requiere.",
    "En 1964, la Dra. Luz María del Castillo Fregoso fue la primer mujer del país en recibir el premio de Ciencias, galardón otorgado por la Academia de la Investigación Científica,",
    "La tapatía egresó de la Preparatoria y se fue a estudiar al Instituto Tecnológico de Massachusset (MIT, por sus siglas en inglés). Se mantuvo en los concursos internacionales y en los siguientes años pudo meterse entre los mejores tres del mundo, por lo que su amor por los números la volvió en una de las Mujeres más poderosas del 2016, según Forbes.",
    "A los 4 años Dafne aprendió a leer y escribir y a los 5 años comenzó a estudiar algebra, materia que nunca se le complicó. Es por eso que cuando intentó entrar a la primaria ya tenía conocimiento previo de muchos temas y la terminó por completo en un año.",
    "Rice le nombró Trustee Distinguished Scholar,  ofreciendole también una beca por mérito científico, y Columbia le nombró Egleston Scholar, que le proporciona tutores personales y financiamiento para investigaciones, viajar a conferencias en el extranjero, o financiar proyectos personales como una startup"
];

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';

    },
    handle(handlerInput) {
        const speechText = 'En esta skill encontrarás datos curiosos sobre ciencia... puedes empezar diciendo... dime un dato curioso o simplemente puedes decir adiós para salir de la skill... para averiguar mas funciones puedes decir ayuda';

        if (supportsAPL(handlerInput)){
        return handlerInput.responseBuilder.speak(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./mexicanos.json'),
                datasources: {},})
                .reprompt(speechText)
                .getResponse();
        }else{
           return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
        }

    }
};

const DatoAleatorioIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'DatoAleatorioIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(0, 70)
        const speechText = dato[num] + '... ¿Quieres saber mas?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('No te entendi, ¿Quieres saber mas?')
            .getResponse();
    }
};

const DatoNaturalezaIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'NaturalezaIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(0, 16)
        const speechText = dato[num] + '... ¿Quieres saber mas?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('No te entendi, ¿Quieres saber mas?')
            .getResponse();
    }
};

const DatoQuimicaIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'QuimicaIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(16, 32)
        const speechText = dato[num] + '... ¿Quieres saber mas?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('No te entendi, ¿Quieres saber mas?')
            .getResponse();
    }
};

const DatoAstronomiaIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'AstronomiaIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(32, 49)
        const speechText = dato[num] + '... ¿Quieres saber mas?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('No te entendi, ¿Quieres saber mas?')
            .getResponse();
    }
};

const DatoMatematicasIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'MatematicasIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(49, 68)
        const speechText = dato[num] + '... ¿Quieres saber mas?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('No te entendi, ¿Quieres saber mas?')
            .getResponse();
    }
};

const DatoSaludIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'SaludIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(68, 79)
        const speechText = dato[num] + '... ¿Quieres saber mas?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('No te entendi, ¿Quieres saber mas?')
            .getResponse();
    }
};

const DatoMexicoIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MexicanosIntent';
    },

    handle(handlerInput){
         num = getRandomInt(79, 92);
        const speechText =  dato[num] + '... ¿Quieres saber mas?';

        if (supportsAPL(handlerInput)){
        return handlerInput.responseBuilder.speak(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./mexicanos.json'),
                datasources: {},})
                .reprompt('No te entendi, ¿Quieres saber mas?').
                getResponse();
        }else{
            return handlerInput.responseBuilder.speak(speechText).reprompt('No te entendi, ¿Quieres saber mas?').getResponse();
        }
    }

};


const DatoArgentinaIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'ArgentinosIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(79, 92)
        const speechText = dato[num] + '... ¿Quieres saber mas?';

        if(supportsAPL(handlerInput)){
          return handlerInput.responseBuilder
              .speak(speechText)
              .addDirective({
                  type: 'Alexa.Presentation.APL.RenderDocument',
                  version: '1.0',
                  document: require('./argentinos.json'),
                  datasources: {},})
              .reprompt('No te entendi, ¿Quieres saber mas?')
              .getResponse();
        }else{
          return handlerInput.responseBuilder
              .speak(speechText)
              .reprompt('No te entendi, ¿Quieres saber mas?')
              .getResponse();
        }

    }
};
const DatoEstadosUnidosIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'EstadosUnidosIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(79, 92)
        const speechText = dato[num] + '... ¿Quieres saber mas?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('No te entendi, ¿Quieres saber mas?')
            .getResponse();
    }
};
const DatoInglaterraIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'InglaterraIntent';
    },
    handle(handlerInput) {
        num = getRandomInt(79, 92)
        const speechText = dato[num] + '... ¿Quieres saber mas?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('No te entendi, ¿Quieres saber mas?')
            .getResponse();
    }
};

const DimeMasIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'DimeMasIntent';
    },
    handle(handlerInput) {
        const speechText = dato1[num] + '... si quieres otro dato curioso, solo dime, quiero un dato curioso aleatorio o dime de que categoria te gustaria escuchar';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt("No entedi lo que dijiste... si quieres otro dato curioso, solo dime, quiero un dato curioso aleatorio o dime de que categoria te gustaria escuchar")
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'Puedes decir que quieres un dato curioso aleatorio, esto te dará un dato entre todas las categorías, o pide un dato curioso de entre estas categorías: Naturaleza, Química, Astronomía, Matemáticas, Salud y Bienestar o Mexicanos en la ciencia... para salir solo di cierra la skill o adios"';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' ||
                handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Adiós, vuelve pronto!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Lo siento, no pude entender lo que me dijiste. Porfavor intentalo de nuevo.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

//funcion de numeros aleatorios

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//This function it is use tu see if the divice supports APL
function supportsAPL(handlerInput) {
    const supportedInterfaces =
    handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
    const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
    return aplInterface != null && aplInterface != undefined;
  }

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DatoAleatorioIntentHandler,
        DatoNaturalezaIntentHandler,
        DatoQuimicaIntentHandler,
        DatoMatematicasIntentHandler,
        DatoAstronomiaIntentHandler,
        DatoSaludIntentHandler,
        DatoMexicoIntentHandler,
        DatoArgentinaIntentHandler,
        DatoEstadosUnidosIntentHandler,
        DatoInglaterraIntentHandler,
        DimeMasIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();

// ANCHOR Imports
import Cart from "../Cart";

// ANCHOR Component
export default function Navbar() {
  // Component
  return (
    <nav className="navbar">
      <div className="componentNav container">
        <div className="componentInside">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="179.058"
              height="28"
              viewBox="0 0 179.058 28"
            >
              <g
                id="Grupo_1504"
                data-name="Grupo 1504"
                transform="translate(2578 -8105)"
              >
                <g
                  id="Grupo_1491"
                  data-name="Grupo 1491"
                  transform="translate(-2578 8105)"
                >
                  <path
                    id="Caminho_1574"
                    data-name="Caminho 1574"
                    d="M2674.28,592.441a.918.918,0,0,0-.053.216,22.745,22.745,0,0,1-.519,4.461,7.794,7.794,0,0,1-.32.966c-.175.5-.352,1.006-.53,1.509-.016.043-.039.083-.073.154-1.626-.664-3.242-1.339-4.883-2.016.087-.233.164-.448.246-.662.553-1.451,1.124-2.9,1.656-4.355a15.553,15.553,0,0,0,.844-3.367,9.119,9.119,0,0,0,.025-1.829,22.651,22.651,0,0,0-.842-4.292c-.109-.4-.227-.8-.344-1.2-.021-.073-.053-.143-.087-.237a1.027,1.027,0,0,0-.175.06c-1.265.718-2.539,1.422-3.789,2.163a14.2,14.2,0,0,0-2.014,1.527c-.409.354-.824.7-1.249,1.063.149.319.3.631.442.945a29.609,29.609,0,0,1,1.705,4.53c.085.312.139.634.194.953a.486.486,0,0,1-.156.5,1.524,1.524,0,0,0-.125.137q-.856.869-1.713,1.736-1.117,1.135-2.229,2.272c-.271.276-.54.555-.811.831-.053.054-.111.1-.165.153a.407.407,0,0,1-.281-.374c-.031-.393-.089-.785-.092-1.178-.016-2.221-.019-4.442-.027-6.664,0-.1-.01-.2-.016-.3-.142-.008-.174.1-.227.164-.436.512-.861,1.034-1.3,1.546-.153.179-.327.34-.519.539a6.32,6.32,0,0,1,.529-1.985c.4-.887.79-1.78,1.189-2.669a1,1,0,0,0,.01-.7c-.121-.423-.272-.837-.411-1.255-.044-.132-.1-.261-.138-.394a13.5,13.5,0,0,0-1.432-2.931,54.647,54.647,0,0,0-4.168-5.944l-.518-.651a1.04,1.04,0,0,0-.075.188c-.078.512-.16,1.023-.226,1.537-.075.582-.143,1.166-.2,1.751-.042.446-.055.895-.085,1.342-.04.594-.087,1.187-.127,1.78-.031.47-.068.941-.08,1.412-.014.564-.023,1.129,0,1.692a20,20,0,0,0,.59,4.611c.206.736.469,1.456.7,2.185.4,1.261.883,2.491,1.375,3.719.286.717.537,1.448.815,2.2-.611.307-1.238.564-1.852.847s-1.227.552-1.84.828l-1.883.852c-.063-.154-.125-.293-.177-.435-.319-.87-.629-1.744-.959-2.611a4.585,4.585,0,0,1-.207-.972c-.112-.749-.215-1.5-.3-2.252-.07-.637-.118-1.277-.152-1.917-.032-.6-.052-1.206-.045-1.809a19.857,19.857,0,0,1,.228-2.632,33.847,33.847,0,0,1,1.3-5.261c.424-1.349.891-2.683,1.424-3.994a22.354,22.354,0,0,1,1.29-2.67c.149-.261.284-.531.444-.8-.042.195.048.268.215.337a8.627,8.627,0,0,1,1.746,1.007c.765.553,1.526,1.114,2.259,1.708a20.36,20.36,0,0,1,3.248,3.366,17.78,17.78,0,0,1,1.267,1.8.681.681,0,0,0,.079.085c.052-.069.1-.126.142-.187a23,23,0,0,1,2.224-2.822,17.869,17.869,0,0,1,1.7-1.578c.919-.758,1.86-1.49,2.816-2.2.5-.373,1.054-.678,1.584-1.012q.875-.55,1.753-1.095c.058-.036.119-.067.2-.113.063.312.125.605.182.9.275,1.4.544,2.792.828,4.186a.412.412,0,0,1-.191.509c-.294.17-.589.34-.885.507-.215.121-.432.237-.662.362a1.834,1.834,0,0,0,.093.174,36.616,36.616,0,0,1,1.983,3.353,17.041,17.041,0,0,1,1.214,2.729,10.456,10.456,0,0,1,.554,3.162.7.7,0,0,0,.053.185Z"
                    transform="translate(-2495.221 -574.751)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1575"
                    data-name="Caminho 1575"
                    d="M-2239.477,618.9l6.721-1.609c.093.359.179.686.263,1.014.159.621.321,1.242.472,1.865a2.507,2.507,0,0,1,.066.5c.035.935.063,1.87.093,2.8.023.711.049,1.422.072,2.133.01.27.023.541.021.812a23.105,23.105,0,0,1-.286,3.393,38.294,38.294,0,0,1-1.248,5.228,37.042,37.042,0,0,1-1.593,4.4,5.812,5.812,0,0,1-.349.652c-.209.343-.433.678-.652,1.016a.851.851,0,0,1-.214.24,2.352,2.352,0,0,1-.005-.259c.042-.493.078-.986.139-1.476a.981.981,0,0,0-.143-.678c-1.36-2.208-2.791-4.369-4.338-6.451a24.2,24.2,0,0,0-2.7-3.057,30.633,30.633,0,0,0-3.23-2.683c-.79-.572-1.593-1.126-2.39-1.687-.068-.048-.141-.09-.246-.156-.011.1-.023.159-.023.222,0,1.053-.012,2.106,0,3.158.01.711.031,1.423.089,2.131a15.75,15.75,0,0,0,.567,3.051c.471,1.634.964,3.261,1.444,4.892.223.756.438,1.514.655,2.272.012.044.021.089.037.16l-5.618,3.182a1.158,1.158,0,0,1-.049-.123,15.8,15.8,0,0,1-.522-2.137c-.041-.322-.063-.647-.074-.97-.023-.7-.03-1.392-.05-2.088-.02-.726-.05-1.452-.068-2.179-.014-.619-.032-1.238-.021-1.856.013-.711.058-1.421.086-2.131a21.531,21.531,0,0,1,.479-3.628c.162-.762.391-1.511.609-2.26.249-.853.519-1.7.779-2.549.021-.066.036-.134.061-.225-.084-.067-.176-.136-.262-.21-.263-.227-.531-.45-.786-.686-.188-.174-.183-.207-.034-.408q1.047-1.406,2.095-2.81.825-1.108,1.647-2.218c.042-.055.085-.109.14-.179.116.114.229.218.335.328.251.263.5.531.75.792.666.691,1.343,1.372,2,2.074a8.68,8.68,0,0,1,.694.9c.635.9,1.273,1.79,1.888,2.7a34.654,34.654,0,0,1,1.948,3.293,48.173,48.173,0,0,1,2.745,6.383c.407,1.151.8,2.306,1.2,3.46.093.27.176.544.266.816.02.063.049.123.073.184l.049,0a1.037,1.037,0,0,0,.05-.18c.081-.916.171-1.832.235-2.749.044-.624.051-1.251.072-1.877.018-.51.042-1.02.045-1.53a18.158,18.158,0,0,0-.278-3.16,14.971,14.971,0,0,0-1.094-3.557c-.21-.473-.379-.964-.579-1.441-.3-.706-.6-1.405-.9-2.11-.31-.734-.612-1.47-.917-2.205C-2239.332,619.266-2239.4,619.094-2239.477,618.9Z"
                    transform="translate(2252.657 -615.968)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1576"
                    data-name="Caminho 1576"
                    d="M-1161.2,622.783c.021-.3.039-.6.065-.9.03-.339.068-.676.1-1.015a.646.646,0,0,0-.094-.419c-.975-1.608-2.014-3.175-3.083-4.723-.642-.93-1.305-1.844-2.016-2.723a24.638,24.638,0,0,0-2.291-2.429,39.3,39.3,0,0,0-4.5-3.542c-.279-.2-.564-.383-.846-.573-.063-.043-.13-.08-.225-.139a1.805,1.805,0,0,0-.029.218c0,.937-.007,1.873,0,2.81q.008.963.047,1.925a15.409,15.409,0,0,0,.275,2.114,31.261,31.261,0,0,0,.832,3.255c.431,1.452.882,2.9,1.311,4.35.129.436.221.884.32,1.329.047.209.036.216-.168.277q-1.31.392-2.623.78l-2.912.865c-.058.017-.117.031-.2.054-.042-.134-.089-.255-.118-.38a7.762,7.762,0,0,1-.212-1.652c-.018-1.051-.06-2.1-.089-3.153-.024-.873-.07-1.747-.062-2.62.009-.973.057-1.947.11-2.919a21.68,21.68,0,0,1,.61-4.006c.183-.741.427-1.468.647-2.2.2-.659.4-1.315.6-1.973.015-.051.022-.1.034-.163a6.771,6.771,0,0,1-1.216-1.1l4.022-5.414c.376.388.738.758,1.1,1.132.231.24.455.485.686.725.429.446.875.878,1.286,1.34.3.334.555.7.821,1.065a47.136,47.136,0,0,1,2.753,4.1c.384.653.746,1.319,1.1,1.988a41.459,41.459,0,0,1,2.336,5.35c.594,1.642,1.14,3.3,1.708,4.951a.711.711,0,0,0,.154.271.454.454,0,0,0,.054-.128c.079-.854.159-1.708.23-2.563.028-.339.041-.679.051-1.019.027-.966.068-1.932.066-2.9a16.8,16.8,0,0,0-.279-2.88,14.668,14.668,0,0,0-.788-2.831q-.479-1.219-.986-2.426c-.281-.669-.59-1.327-.875-2-.263-.619-.51-1.244-.764-1.867-.093-.228-.185-.457-.291-.718l6.7-1.607a1.321,1.321,0,0,1,.069.171q.361,1.415.717,2.832a.952.952,0,0,1,.033.2c.018.665.027,1.33.05,1.994.022.61.068,1.219.086,1.83.026.9.074,1.811.044,2.714a27.619,27.619,0,0,1-1.035,6.3c-.326,1.2-.668,2.4-1.1,3.566-.343.936-.714,1.861-1.094,2.782a4.832,4.832,0,0,1-.434.713c-.211.331-.426.659-.64.988Z"
                    transform="translate(1211.06 -597.963)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1577"
                    data-name="Caminho 1577"
                    d="M207.2,626.188c-.132.009-.156-.109-.2-.188-.274-.476-.534-.96-.817-1.43a8.85,8.85,0,0,1-.589-1.36c-.537-1.358-1.061-2.721-1.59-4.082q-.311-.8-.622-1.6c-.033-.084-.072-.166-.127-.291-.074.1-.127.157-.172.224-.082.122-.166.243-.237.372a.207.207,0,0,1-.274.105,3.664,3.664,0,0,1-.478-.176c-.767-.369-1.533-.739-2.294-1.12a17.24,17.24,0,0,0-5.01-1.627c-.313-.05-.624-.108-.937-.16a.93.93,0,0,0-.144,0,.869.869,0,0,0-.042.456q.011.58.044,1.159c.032.571.076,1.141.109,1.712.029.5.043,1,.079,1.5.041.578.1,1.155.146,1.733.037.439.076.878.111,1.317a2.118,2.118,0,0,1,0,.254.371.371,0,0,1-.235.339q-1.661.831-3.315,1.675c-.642.326-1.282.655-1.923.982-.088.045-.178.086-.289.139a3.131,3.131,0,0,1-.235-.831c-.036-.517-.058-1.034-.075-1.551-.016-.464-.027-.928-.022-1.392a34.744,34.744,0,0,1,.2-3.471,20.726,20.726,0,0,1,.568-3.215c.059-.216.122-.432.182-.648.022-.081.04-.163.065-.271a12.769,12.769,0,0,0-2.76.186c.016-.138.12-.142.192-.165.5-.161,1-.322,1.505-.465.341-.1.69-.171,1.038-.24a.381.381,0,0,0,.345-.309,5.047,5.047,0,0,1,.259-.768c.2-.468.415-.932.643-1.388.3-.608.613-1.215.945-1.808a26.065,26.065,0,0,1,2.344-3.453q1.391-1.754,2.818-3.479a24.807,24.807,0,0,1,2.174-2.318c.349-.326.752-.595,1.133-.886a.773.773,0,0,1,.183-.058c-.067.115-.105.184-.146.252q-1.118,1.859-2.237,3.718c-.038.063-.066.131-.1.2l.034.039a.71.71,0,0,0,.154-.061q1.551-1.084,3.1-2.173c.075-.053.151-.1.246-.168.12.206.234.4.343.59.607,1.069,1.221,2.134,1.813,3.211a9.726,9.726,0,0,1,.494,1.123c.544,1.38,1.056,2.772,1.5,4.189a29.815,29.815,0,0,1,.973,3.959c.2,1.2.416,2.407.581,3.616.16,1.171.273,2.348.392,3.524.075.746.139,1.493.181,2.241a15.378,15.378,0,0,1,0,2.293A.144.144,0,0,1,207.2,626.188Zm-10.978-20.354c-.052.1-.1.176-.136.258-.351.765-.7,1.533-1.052,2.3a14.452,14.452,0,0,0-1.305,4.688c-.012.12-.025.239-.037.365a.853.853,0,0,0,.113.021c.425.014.85.029,1.275.038.294.006.589,0,.883,0,.217,0,.435-.008.65.015.46.05.918.114,1.376.178q.837.117,1.672.244c.77.116,1.54.235,2.31.35a1.365,1.365,0,0,0,.18,0c-.034-.1-.057-.171-.083-.242-.226-.608-.455-1.215-.679-1.824a11.821,11.821,0,0,0-.834-1.809,11.293,11.293,0,0,0-1.614-2.144,21.2,21.2,0,0,0-2.535-2.312C196.353,605.92,196.3,605.885,196.223,605.835Z"
                    transform="translate(-110.664 -598.825)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1578"
                    data-name="Caminho 1578"
                    d="M-431.65,630.494c-.28.054-.583.11-.885.172a11.767,11.767,0,0,1-2.582.232c-.4-.007-.791.014-1.186,0a14.757,14.757,0,0,1-2.8-.335,9.912,9.912,0,0,1-2.944-1.282c-.125-.078-.247-.159-.373-.236a4.853,4.853,0,0,1-1.07-.847c-.21-.227-.444-.431-.666-.647-.055-.053-.105-.11-.18-.19l4.872-3.682a1.87,1.87,0,0,1,.518.837,15,15,0,0,0,.645,2.224,5.342,5.342,0,0,0,.283.609,3.738,3.738,0,0,0,1.445,1.342,9.08,9.08,0,0,0,2.04.878q1.261.394,2.521.791c.079.025.162.037.263.06a1.594,1.594,0,0,0,.019-.168c0-.619.015-1.239,0-1.858q-.039-1.379-.115-2.756c-.044-.779-.122-1.556-.176-2.334-.022-.316-.017-.634-.03-.95a14.46,14.46,0,0,0-.442-2.86,37.338,37.338,0,0,0-1.41-4.437c-.124-.324-.265-.643-.42-.955q-.81-1.631-1.638-3.253c-.314-.612-.651-1.212-.977-1.818a1.034,1.034,0,0,1-.046-.127l6.306-2.647c.027.072.053.134.072.2.376,1.25.765,2.5,1.12,3.753a13.987,13.987,0,0,1,.311,1.545c.143.869.281,1.739.391,2.613.09.712.144,1.43.2,2.146.033.462.04.927.048,1.39a18.921,18.921,0,0,1-.321,3.552,41.278,41.278,0,0,1-1.354,5.273,30.85,30.85,0,0,1-1.045,2.948C-431.385,629.94-431.515,630.2-431.65,630.494Z"
                    transform="translate(500.428 -605.276)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1579"
                    data-name="Caminho 1579"
                    d="M1309.779,598.934l-.949-.367c.339.023.655.039.971.068a.379.379,0,0,0,.379-.2c.308-.454.605-.921.956-1.341a8.1,8.1,0,0,1,.984-.947,12.152,12.152,0,0,1,1.713-1.272,13.7,13.7,0,0,1,3.77-1.526,18.473,18.473,0,0,1,2.532-.431,15.894,15.894,0,0,1,2.109-.073,12.933,12.933,0,0,1,3.869.642,2.622,2.622,0,0,1,.44.206c.188.109.2.158.108.357q-.412.908-.829,1.814-.508,1.106-1.019,2.212c-.013.027-.027.054-.053.106-.269-.046-.543-.081-.812-.141-.935-.21-1.869-.427-2.8-.645a18.052,18.052,0,0,0-2.371-.43,10.137,10.137,0,0,0-1.691-.028,11.362,11.362,0,0,0-5.064,1.738c-.057.034-.107.078-.207.152.16.037.266.069.375.085a30.533,30.533,0,0,1,4.2.944,12.534,12.534,0,0,1,3.957,1.9,15.6,15.6,0,0,1,1.4,1.18,26.228,26.228,0,0,1,2.333,2.489,8.541,8.541,0,0,1,.548.8q.83,1.287,1.652,2.579a.643.643,0,0,1,.032.062c-.11.118-5.1,2.987-5.473,3.148-.024-.062-.051-.123-.071-.186a15,15,0,0,1-.56-2.27,23.037,23.037,0,0,0-.768-3.295,6.349,6.349,0,0,0-1.451-2.557,12.243,12.243,0,0,0-2.052-1.7,22.843,22.843,0,0,0-2.859-1.636c-.62-.3-1.252-.571-1.875-.863a.319.319,0,0,0-.38.048,9.9,9.9,0,0,0-1.2,1.095c-.185.206-.333.446-.5.67-.045.061-.092.121-.16.211a1.287,1.287,0,0,1,0-.636,5.379,5.379,0,0,1,.724-1.722,1.6,1.6,0,0,0,.092-.161C1309.785,599,1309.779,598.981,1309.779,598.934Z"
                    transform="translate(-1198.368 -592.271)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1580"
                    data-name="Caminho 1580"
                    d="M2250.856,630.824c.271-.251.548-.5.813-.754a9.606,9.606,0,0,0,1.182-1.457,18.776,18.776,0,0,0,2.1-3.812,10.694,10.694,0,0,0,.743-3.616,11.331,11.331,0,0,0-.095-1.361c-.046-.523-.092-1.047-.164-1.567a6.516,6.516,0,0,0-.573-1.83,15.29,15.29,0,0,0-2.328-3.48c-.491-.577-1.015-1.126-1.549-1.665-.587-.594-1.2-1.159-1.8-1.741-.171-.166-.328-.348-.5-.531.089-.1.172-.2.262-.3q.993-1.041,1.989-2.08c.155-.162.313-.321.462-.489a.308.308,0,0,1,.309-.114,1.811,1.811,0,0,1,.464.134c.458.24.914.489,1.357.756a11.4,11.4,0,0,1,2.2,1.737,17.507,17.507,0,0,1,2.3,2.908,12.038,12.038,0,0,1,1.7,4.357,14.605,14.605,0,0,1,.222,3.256,12.743,12.743,0,0,1-.994,4.594,11.634,11.634,0,0,1-1.574,2.59,17.121,17.121,0,0,1-1.526,1.714,14.174,14.174,0,0,1-2.78,2.12.972.972,0,0,1-.208.1c-.66.19-1.321.375-1.981.562Z"
                    transform="translate(-2109.067 -605.054)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1581"
                    data-name="Caminho 1581"
                    d="M1940.481,639.233c-.121.136-.226.258-.334.376q-1.422,1.56-2.844,3.12a.67.67,0,0,1-.437.229,7.053,7.053,0,0,1-2.437-.2,7.721,7.721,0,0,1-3.533-1.862,10.536,10.536,0,0,1-2.166-2.793,12.286,12.286,0,0,1-1.441-5c-.035-.462-.069-.926-.065-1.389a12.775,12.775,0,0,1,.871-4.669,12.972,12.972,0,0,1,1.922-3.24,24.468,24.468,0,0,1,2.363-2.585,18.973,18.973,0,0,1,2.573-2.053,4.722,4.722,0,0,1,.581-.29c.556-.266,1.113-.531,1.689-.77-.187.165-.369.335-.561.494a18,18,0,0,0-2.687,2.907,25.542,25.542,0,0,0-1.894,2.751,9.025,9.025,0,0,0-1.109,2.738,7.461,7.461,0,0,0-.127,2.03c.031.447.04.9.1,1.34a8.809,8.809,0,0,0,2.178,4.831,11.938,11.938,0,0,0,3.158,2.563,9.823,9.823,0,0,0,2.342.932c.561.143,1.117.306,1.676.461C1940.351,639.179,1940.4,639.2,1940.481,639.233Z"
                    transform="translate(-1797.581 -616.771)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1582"
                    data-name="Caminho 1582"
                    d="M-1517.12,636.28l6.644-2.872a3.371,3.371,0,0,1,.109.465q.06.681.093,1.364c.018.347.033.7.022,1.043-.028.88-.072,1.761-.11,2.641q-.046,1.054-.1,2.108c-.046,1,0,2.012-.14,3.01-.1.7-.2,1.407-.327,2.107a37.006,37.006,0,0,1-.926,4c-.394,1.351-.874,2.673-1.372,3.988-.414,1.091-.821,2.184-1.231,3.276-.013.034-.028.068-.053.128,0-.309-.006-.589,0-.868s.031-.571.041-.856c.019-.564.041-1.128.048-1.692q.03-2.553.047-5.106c0-.193-.013-.386-.023-.579-.026-.509-.041-1.02-.086-1.527-.05-.577-.127-1.152-.193-1.728a17.131,17.131,0,0,0-.536-2.844c-.235-.809-.492-1.611-.748-2.413-.365-1.141-.738-2.279-1.107-3.418C-1517.084,636.437-1517.1,636.369-1517.12,636.28Z"
                    transform="translate(1539.933 -631.589)"
                    fill="#041e50"
                  />
                  <path
                    id="Caminho_1583"
                    data-name="Caminho 1583"
                    d="M1323.33,1155.935c.4.1.76.2,1.128.275,1.246.263,2.491.533,3.741.77.56.106,1.132.148,1.7.2.307.031.621.01.925.054a6.1,6.1,0,0,0,1.271-.019,12.325,12.325,0,0,0,1.623-.245,19.061,19.061,0,0,0,3.959-1.365c.87-.384,1.717-.818,2.575-1.229.187-.089.375-.174.594-.277-.033.2-.057.365-.089.53a15.817,15.817,0,0,1-.59,2.215,4.52,4.52,0,0,1-.953,1.5,8.588,8.588,0,0,1-3.41,2.215,23.862,23.862,0,0,1-4.5,1.2c-.829.143-1.663.276-2.5.354-.692.065-1.391.05-2.087.053a3.218,3.218,0,0,1-.594-.089.384.384,0,0,1-.3-.257c-.5-1.19-1.009-2.375-1.515-3.562l-.892-2.09C1323.393,1156.1,1323.368,1156.033,1323.33,1155.935Z"
                    transform="translate(-1212.418 -1136.135)"
                    fill="#041e50"
                  />
                </g>
              </g>
            </svg>
          </div>

          <div className="containerSearch">
            <input type="text" placeholder="BUSQUE AQUI" />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.575"
                height="19.579"
                viewBox="0 0 19.575 19.579"
              >
                <g
                  id="_003-magnifying-glass"
                  data-name="003-magnifying-glass"
                  transform="translate(0.4 0.4)"
                >
                  <path
                    id="Caminho_3"
                    data-name="Caminho 3"
                    d="M18.663,17.822,14.1,13.258a8.014,8.014,0,1,0-.791.791l4.564,4.564a.566.566,0,0,0,.4.167.549.549,0,0,0,.4-.167A.563.563,0,0,0,18.663,17.822ZM1.17,8.007a6.883,6.883,0,1,1,6.883,6.887A6.891,6.891,0,0,1,1.17,8.007Z"
                    transform="translate(-0.05 0)"
                    fill="#041e50"
                    stroke="#041e50"
                    strokeWidth="0.8"
                  />
                </g>
              </svg>
            </button>
          </div>

          <div className="containerContact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.792"
              height="21.792"
              viewBox="0 0 21.792 21.792"
            >
              <g
                id="Grupo_1517"
                data-name="Grupo 1517"
                transform="translate(0 0)"
              >
                <path
                  id="Caminho_1636"
                  data-name="Caminho 1636"
                  d="M18.7,3.1A10.5,10.5,0,0,0,11.224,0h0A10.57,10.57,0,0,0,1.832,15.415L.056,20.489a.98.98,0,0,0,.921,1.3.988.988,0,0,0,.326-.056L6.377,19.96A10.568,10.568,0,0,0,18.7,3.1Zm-.9,14.041a9.293,9.293,0,0,1-10.93,1.635.984.984,0,0,0-.785-.061l-4.61,1.614,1.614-4.61a.985.985,0,0,0-.061-.785,9.291,9.291,0,0,1,8.2-13.651h0a9.29,9.29,0,0,1,6.569,15.859Z"
                  transform="translate(0 0)"
                  fill="#041e50"
                />
                <path
                  id="Caminho_1637"
                  data-name="Caminho 1637"
                  d="M137.079,120.454a1.248,1.248,0,0,0-1.763,0l-.532.532a7.739,7.739,0,0,1-3.108-3.108l.532-.532a1.248,1.248,0,0,0,0-1.763l-1.433-1.433a1.248,1.248,0,0,0-1.763,0l-1.146,1.146c-.657.657-.689,1.785-.092,3.178a13.951,13.951,0,0,0,6.414,6.414,4.628,4.628,0,0,0,1.784.425,1.9,1.9,0,0,0,1.394-.517l1.146-1.146h0a1.247,1.247,0,0,0,0-1.763Zm-.617,3.439c-.187.187-.764.253-1.771-.179a12.707,12.707,0,0,1-5.743-5.743c-.432-1.007-.366-1.584-.179-1.771l1.124-1.124,1.389,1.389-.665.666a.975.975,0,0,0-.181,1.136,9.017,9.017,0,0,0,3.96,3.96.975.975,0,0,0,1.136-.181l.666-.666,1.389,1.389Z"
                  transform="translate(-121.927 -108.943)"
                  fill="#041e50"
                />
              </g>
            </svg>
            <p>(11) 99999-9999</p>
          </div>

          <div className="containerUser">
            <svg
              id="avatar"
              xmlns="http://www.w3.org/2000/svg"
              width="19.636"
              height="23.085"
              viewBox="0 0 19.636 23.085"
            >
              <g id="Grupo_213" data-name="Grupo 213" transform="translate(0)">
                <path
                  id="Caminho_1520"
                  data-name="Caminho 1520"
                  d="M141.987,12.439h.153a4.411,4.411,0,0,0,3.37-1.458c1.841-2.075,1.535-5.631,1.5-5.971A4.877,4.877,0,0,0,144.693.674,5.315,5.315,0,0,0,142.121,0h-.081a5.323,5.323,0,0,0-2.572.655,4.88,4.88,0,0,0-2.347,4.355c-.033.339-.339,3.9,1.5,5.971A4.394,4.394,0,0,0,141.987,12.439ZM138.4,5.13c0-.014,0-.029,0-.038.158-3.428,2.591-3.8,3.633-3.8h.057c1.291.029,3.485.555,3.633,3.8a.094.094,0,0,0,0,.038c0,.033.339,3.284-1.181,5a3.133,3.133,0,0,1-2.462,1.023h-.048a3.123,3.123,0,0,1-2.457-1.023C138.067,8.423,138.392,5.158,138.4,5.13Z"
                  transform="translate(-132.253)"
                  fill="#041e50"
                />
                <path
                  id="Caminho_1521"
                  data-name="Caminho 1521"
                  d="M55.708,265.189v-.014c0-.038,0-.077,0-.12-.029-.947-.091-3.16-2.166-3.867l-.048-.014a13.8,13.8,0,0,1-3.968-1.807.645.645,0,0,0-.741,1.056,14.89,14.89,0,0,0,4.365,1.993c1.114.4,1.238,1.587,1.272,2.677a.961.961,0,0,0,0,.119,8.677,8.677,0,0,1-.1,1.477,17.594,17.594,0,0,1-8.428,1.96,17.694,17.694,0,0,1-8.433-1.965,8.215,8.215,0,0,1-.1-1.477c0-.038,0-.077,0-.12.033-1.09.158-2.28,1.272-2.677A15.027,15.027,0,0,0,43,260.418a.645.645,0,1,0-.741-1.056,13.643,13.643,0,0,1-3.968,1.807l-.048.014c-2.075.712-2.137,2.926-2.166,3.868a.958.958,0,0,1,0,.119v.014a7.331,7.331,0,0,0,.244,2.165.613.613,0,0,0,.249.3,18.081,18.081,0,0,0,9.332,2.285,18.136,18.136,0,0,0,9.332-2.285.639.639,0,0,0,.249-.3A7.691,7.691,0,0,0,55.708,265.189Z"
                  transform="translate(-36.073 -246.851)"
                  fill="#041e50"
                />
              </g>
            </svg>
            <div>
              <p>Olá, visitante</p>
              <sub>MINHA CONTA</sub>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="3"
              viewBox="0 0 5 3"
            >
              <path
                id="Polígono_3"
                data-name="Polígono 3"
                d="M2.5,0,5,3H0Z"
                transform="translate(5 3) rotate(180)"
                fill="#041e50"
              />
            </svg>
          </div>
        </div>
        <Cart className="cart" />
      </div>
    </nav>
  );
}
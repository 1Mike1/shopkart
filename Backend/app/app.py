from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# path = r'/home/mithilesh/Development/Project/App/Frontend/app/src/assets/'
path = r'/assets/'


@app.route('/get_brands', methods=['GET'])
def get_brands():
    return {
        'data':
        [
            'Apple',
            'Samsung',
            'Google',
            'Oneplus',
            'Nothing',
            'Nokia',
            'Oppo',
            'Vivo'
        ]
    }


@app.route('/get_products', methods=['GET'])
def get_products():
    return {
        'data':
            [
                {
                    'name': 'Samsung Fold 3',
                    'imgUrl': f'{path}fold_3.jpeg',
                    'price': 150000,
                    'qty': 5,
                    'url': 'http://www.google.com/samsung-fold-3'
                },
                {
                    'name': 'Iphone 14 Pro Max',
                    'imgUrl': f'{path}/iphone_14.jpeg',
                    'price': 170000,
                    'qty': 8,
                    'url': 'http://www.google.com/samsung-fold-3'
                },

                {
                    'name': 'Motorola Razr 40',
                    'imgUrl': f'{path}razr_40.jpeg',
                    'price': 140000,
                    'qty': 10,
                    'url': 'http://www.google.com/samsung-fold-3'
                },
                {
                    'name': 'Samsung Galaxy S23 Ultra',
                    'imgUrl': f'{path}s23_ultra.jpeg',
                    'price': 120000,
                    'qty': 3,
                    'url': 'http://www.google.com/samsung-fold-3'
                },
                {
                    'name': 'Nothing Phone 2',
                    'imgUrl': f'{path}nothing_2.jpg',
                    'price': 60000,
                    'qty': 12,
                    'url': 'http://www.google.com/nothing-phone-2'
                },
                {
                    'name': 'Samsung Galaxy Z Flip-4',
                    'imgUrl': f'{path}z_flip_3.jpeg',
                    'price': 98000,
                    'qty': 10,
                    'url': 'http://www.google.com/samsung-flip-4'
                },
                {
                    'name': 'Oneplus 11 Pro',
                    'imgUrl': f'{path}oneplus_11.jpeg',
                    'price': 72000,
                    'qty': 7,
                    'url': 'http://www.google.com/oneplus-11-pro'
                },
                {
                    'name': 'Google Pixel 7 Pro',
                    'imgUrl': f'{path}pixel_7.jpeg',
                    'price': 90000,
                    'qty': 2,
                    'url': 'http://www.google.com/samsung-fold-3'
                }
            ]
    }


if __name__ == '__main__':
    app.run(host='localhost', port=5003, debug=True)

-- admin and user
INSERT INTO
    users(name, email, password, orginial_town, is_admin)
VALUES
    (
        'palestineAdmin',
        'saydat.alard@gmail.com',
        '$2a$10$Bp9etHWYo1UAANX99Ju3LuEzTlH7d1mq8snUpUzV7UhfBlQwozIly',
        'فلسطين',
        true
    ),
    (
        'Reem',
        'reem@gmail.com',
        '$2a$10$Bp9etHWYo1UAANX99Ju3LuEzTlH7d1mq8snUpUzV7UhfBlQwozIly',
        'حمامة',
        false
    );

-- cities
INSERT INTO
    cities (
        name,
        area,
        location,
        image,
        quotation,
        is_main
    )
VALUES
    (
        'عكا',
        '10.3',
        'تقع على الساحل الشرقي للبحر الأبيض المتوسط. تبعد عن القدس حوالي 181 كم إلى الشمال الغربي',
        'https://palemb-sy.com/wp-content/uploads/2018/09/A1CPssD3PPQOwpWp5122_jpg-750x430.jpg',
        'أجمل المدن القديمة، أقدم المدن الجميلة',
        true
    ),
    (
        'حيفا',
        '63.66',
        ' تقع على الساحل الشرقي للبحر المتوسط، وتبعد عن القدس حوالي 158 كم إلى الشمال الغربي',
        'https://i.ytimg.com/vi/QhMNyc0GTyE/maxresdefault.jpg',
        'لن يعرفوا حيفا إذا رجعوا، هذي الأرضُ لا تأتي إلى أحدٍ',
        true
    ),
    (
        'القدس',
        '125.1',
        'تقع القدس ضمن سلسلة جبال الخليل وتتوسط المنطقة الواقعة بين البحر المتوسط والطرف الشمالي للبحر الميت',
        'https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,h_1080,c_fill,q_auto/cnnarabic/2020/01/29/images/145651.jpg',
        'حيث الأنبياء هنا يقتسمون تاريخ المقدس',
        true
    ),
    (
        'نابلس',
        '85',
        'تبعد عن مدينة القدس 69 كم، وعن العاصمة الأردنية عمان 114 كم، وعن البحر المتوسط 42 كم',
        'https://i.pinimg.com/originals/c9/64/a2/c964a2e36cbdb0d85de9655d80abef86.jpg',
        'بوركت أرضا ولا زال بها، تتوالى السحب وجدا وغراما',
        true
    );

-- stories
INSERT INTO
    stories (
        image,
        content,
        title,
        user_id,
        city_id,
        approved
    )
VALUES
    (
        'https://lh3.googleusercontent.com/proxy/fzlGJ2skma065mTkNTEKn38kTVDvxcS-tbkJ8yD8_sRcPxyK3snTjRIbwmdM1dAbyOg90P-Z2c1_z2k-btFgPIy7MN8JAB6lpnpjHuD-RJbvOhI',
        'كنت أَمشي فوق منحدر وأهجس، كيف يختلف الرواة على كلام الضوء في حجر، أمن حجر شحيح الضوء تندلع الحروب، أسير في نومي. أحملق في منامي. لا أرى أحدا ورائي. لا أرى أَحدا أمامي. كل هذا الضوء لي. أمشي. أخف. أطير ثم أصير غيري في التجلي. ',
        'في القدس',
        1,
        3,
        false
    );

        3
    );

INSERT INTO
    proverbs(content)
VALUES
    ('أنا'),
    ('إنت'),
    ('انا'),
    ('بانت');

INSERT INTO
    families(name, city_id)
VALUES
    ('ناصر', 1),
    ('زقوت', 3),
    ('شامية', 2);


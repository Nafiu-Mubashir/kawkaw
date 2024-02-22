import { CoursesCard } from '~/type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CoursesCard = {
  course: [
    {
      image: '/courses/course-1.webp',
      authur: 'Kenny White',
      title: 'Create an LMS Website with LearnPress',
      amount: 0,
      price: 'Free',
      description: 'COURSE DESCRIPTION A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education...',
      category: 'teaching online',
      members: 319,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-2.webp',
      authur: 'Kenny White',
      title: 'Introduction LearnPress – LMS plugin',
      amount: 0,
      price: 'Free',
      description: 'A WordPress LMS Plugin to create WordPress Learning Management System. Turn your WP to LMS WordPress with Courses, Lessons, Quizzes & more.',
      category: 'teaching online',
      members: 511,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-3.webp',
      authur: 'Kenny White',
      title: 'How To Teach An Online Course',
      amount: 55.00,
      price: 'Paid',
      description: 'This tutorial will introduce you to PHP, a server-side scripting language you can use to make dynamic websites and web applications.',
      category: 'teaching online',
      members: 28,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-4.webp',
      authur: 'Kenny White',
      title: 'How To Create An Online Course',
      amount: 30.00,
      price: 'Paid',
      description: 'The jQuery team knows all about cross-browser issues, and they have written this knowledge into the jQuery library. jQuery will run exactly the same...',
      category: 'coaching',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-5.webp',
      authur: 'Kenny White',
      title: 'The Complete Online Teaching Masterclass',
      amount: 25.00,
      price: 'Paid',
      description: 'The jQuery team knows all about cross-browser issues, and they have written this knowledge into the jQuery library. jQuery will run exactly the same...',
      category: 'teaching training',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-6.webp',
      authur: 'Kenny White',
      title: 'Online Course Creation Secrets',
      amount: 55.00,
      price: 'Paid',
      description: 'The jQuery team knows all about cross-browser issues, and they have written this knowledge into the jQuery library. jQuery will run exactly the same...',
      category: 'teaching training',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    
    {
      image: '/courses/course-13.webp',
      authur: 'Kenny White',
      title: 'Build a Six-Figure Online Business Selling Online Courses',
      amount: 49.00,
      price: 'Paid',
      description: 'HTML is the language of choice for structuring and presenting content for the World Wide Web. In this free online course you will learn...',
      category: 'photography',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-17.webp',
      authur: 'Kenny White',
      title: 'Build a Six-Figure Online Business Selling Online Courses',
      amount: 49.00,
      price: 'Paid',
      description: 'HTML is the language of choice for structuring and presenting content for the World Wide Web. In this free online course you will learn...',
      category: 'photography',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-8.webp',
      authur: 'Kenny White',
      title: 'How To Create In-Demand Online Courses',
      amount: 49.00,
      price: 'Paid',
      description: 'In this tutorial we will provide you with detailed instructions on how to use WordPress to create and manage your site.WordPress can be....',
      category: 'Online Business',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-9.webp',
      authur: 'Kenny White',
      title: 'Launch Your Own Online School and Increase Your Profits',
      amount: 49.00,
      price: 'Paid',
      description: 'Interchange now enables HTML partials for device specific content. Smoother animations and transitions happen with hardware acceleration. The default styles are all updated.',
      category: 'passive income',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-10.webp',
      authur: 'Kenny White',
      title: 'Easy Zurb Foundation',
      amount: 49.00,
      price: 'Paid',
      description: 'Interchange now enables HTML partials for device specific content. Smoother animations and transitions happen with hardware acceleration. The default styles are all updated.',
      category: 'passive income',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-11.webp',
      authur: 'Kenny White',
      title: 'Instructional Design for Learning and Development',
      amount: 50.00,
      price: 'Paid',
      description: 'This tutorial will introduce you to PHP, a server- side scripting language you can use to make dynamic websites and web applications.',
      category: 'teaching online',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-12.jpg',
      authur: 'Kenny White',
      title: '50 Tips on Making a Great Online Course',
      amount: 159.00,
      price: 'Paid',
      description: 'This tutorial is specially designed to help you learn AngularJS as quickly and efficiently as possible.',
      category: 'teaching online',
      members: 0,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-13.webp',
      authur: 'Kenny White',
      title: 'How To Teach Online Courses Effectively',
      amount: 0,
      price: 'Free',
      description: 'Build and deploy a few Nodejs, MongoDB & Expressjs apps while watching to lectures by the author of 9 books on JS/ Node.',
      category: 'technology',
      members: 104,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-14.jpg',
      authur: 'Kenny White',
      title: 'How to Create an Awesome Online Course',
      amount: 99.00,
      price: 'Paid',
      description: 'Sass is completely compatible with all versions of CSS.We take this compatibility seriously, so that you can seamlessly use any available CSS libraries.',
      category: 'technology',
      members: 15,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
    {
      image: '/courses/course-15.webp',
      authur: 'Kenny White',
      title: 'Accelerate Your Course Creation Speed',
      amount: 69.00,
      price: 'Paid',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the...",
      category: 'video creation',
      members: 50,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    }, 
    {
      image: '/courses/course-16.jpg',
      authur: 'Kenny White',
      title: 'Begin Teaching Online Full Time',
      amount: 59.00,
      price: 'Paid',
      description: 'JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods.Its syntax comes from the Java and C...',
      category: 'video creation',
      members: 25,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    }, 
    {
      image: '/courses/course-17.webp',
      authur: 'Kenny White',
      title: 'Eduma Course Creation for Passive Income',
      amount: 94.00,
      price: 'Paid',
      description: 'Less is a CSS pre- processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that...',
      category: 'video creation',
      members: 25,
      overview: 'A series of Videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin.This course is a detailed and easy tutorial to get you all setup and going with the use of LearnPress LMS Plugin. It is a free and simple plugin to help you create an Online Courses Website step by step. The tutorial guides you through the configuration of the plugin, creation of Courses, Lessons, Quizzes, and finally guides you on how to boost up your Website with Premium LearnPress Add-ons brought to you by ThimPress (creator of LearnPress). It also shows how you could configure additional items like the course layouts and featured images.',
      authorDetails: 'Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae. Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium repellendus ea enim harum.'
    },
  ]
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});

export default coursesSlice.reducer;

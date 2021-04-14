Array.from(document.getElementsByTagName('a')).forEach(e => {
    if(e.href.includes('github.com')){
        e.href=e.href.replace(/github.com/,'hub.fastgit.org')
        e.title='镜像：'+e.href.replace(/github.com/,'hub.fastgit.org')
    }
});
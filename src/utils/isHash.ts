const isHash = (link: string): boolean => {
    const linkArr = link.split('/');
    for (const linkSlice of linkArr) {
        if (linkSlice.charAt(0) === '#') return true;
    }
    return false;
};

export default isHash;

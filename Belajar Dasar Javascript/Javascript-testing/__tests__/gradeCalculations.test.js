test('it should handle non-number ', () => {
    const listValueOfExams = [80, 'a', '100', 80];
    expect(() => averageExams(listValueOfExams)).toThrow();
})